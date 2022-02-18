/** Global variables **/
let all_data;
let la_data;
let mapRelativeWidth = 1000;
let mapRelativeHeight = 1000;
let mapRelativeScale = 5100;
let expensesContent = undefined;
let bankBalance = 0;
let expensesUpdater = undefined;
let balanceUpdater = undefined;
let rewatchEnabled = true;
let pid = undefined;
let local = undefined;
let loggingKey = undefined;
let pk = undefined;
let rewatchLookbackData = undefined;
let actualLocation = undefined;
let essentials = undefined;
let luxuries = undefined;
let whiteGoods = undefined;
let currentVal = 0;
let selectedCode = undefined;

/** Logging **/
/* NB. the film does not currently log any information about its users. 
/* This logging functionality was for a research study, in which all users were aware of the data being captured and informed consent was sought and recorded.
/* While the code is no longer used, I have left it in for reference and in case its useful for anyone.
 */
async function logViewingComplete()
{
	if(loggingKey != undefined)
	{
		let query = './logging/logging.php';
		query += '?key=' + loggingKey;
		query += '&method=viewComplete';
		query += '&pk=' + pk;

		let result = await(await fetch(query)).text();
		if(result < 0)
		{
			console.error('failed to log viewing as complete with data: ' + query);
		}
		else
		{
			console.log('logged viewing as complete: ' + pk);
		}	
	}
}

async function logAtom(atom)
{
	if(loggingKey != undefined)
	{
		let atomId = atom.id;
		let atomName = atom.flowPackage.url;

		let query = './logging/logging.php';
		query += '?key=' + loggingKey;
		query += '&method=newAtom';
		query += '&pk=' + pk;
		query += '&atom_id=' + atomId;
		query += '&atom_name=' + atomName;

		let result = await(await fetch(query)).text();
		if(result < 0)
		{
			console.error('failed to log atom session with data: ' + query);
		}
		else
		{
			console.log('logged atom: ' + atomId + '(' + atomName + ')');
		}		
	}
}

async function logNewRewatchClick(rw_data)
{
	if(loggingKey != undefined)
	{
		let query = './logging/logging.php';
		query += '?key=' + loggingKey;
		query += '&method=newRewatchClick';
		query += '&pk=' + pk;
		query += '&la_code=' + rw_data['LA_code'];
		query += '&la_name=' + rw_data['Local_authority'];
		query += '&grant=' + rw_data['Shg_2011'];
		query += '&exempt=' + rw_data['Council_tax_exemption'];
		query += '&local=' + (actualLocation == rw_data['LA_code']);

		let result = await(await fetch(query)).text();
		if(result < 0)
		{
			console.error('failed to log rewatch click with data: ' + query);
		}
		else
		{
			console.log('logged rewatch click: ' + rw_data['LA_code'] + '(' + rw_data['Local_authority'] + ')');
		}		
	}
}

async function logNewView()
{
	if(loggingKey != undefined)
	{
		let query = './logging/logging.php';
		query += '?key=' + loggingKey;
		query += '&method=newView';
		query += '&pid=' + pid;
		query += '&local=' + local;
		query += '&rewatch=' + rewatchEnabled;
		query += '&la_code=' + la_data['LA_code'];
		query += '&la_name=' + la_data['Local_authority'];
		query += '&exempt=' + la_data['Council_tax_exemption'];
		query += '&tax_rate=' + la_data['Council_tax_d'];
		query += '&grant=' + la_data['Shg_2011'];

		pk = await(await fetch(query)).text();
		if(pk == '-1')
		{
			console.error('failed to log new session with data: ' + query);
		}
		else
		{
			console.log('logged new view');
		}
	}
}

/** Browser detection */
function checkCompatibleBrowserAndDevice()
{
	let userAgent = navigator.userAgent;
	let isMobile = navigator.userAgentData;
	let browserWarn = document.querySelector('#splash-browser-warning');

	if(!userAgent.includes("Chrome") || (isMobile.mobile != undefined && isMobile.mobile))
	{
		browserWarn.style.display = 'block';
	}
	else
	{
		browserWarn.style.display = 'none';
	}
}

/** Interactive map and geo-location **/
function locationSelected()
{
	let locInput = document.querySelector('#location-input').value;
	let splashButton = document.querySelector('#splash-button');

	let keys = Object.keys(all_data);
	for(let i = 0; i < keys.length; i++)
	{
		let item = all_data[keys[i]];

		if(item.Local_authority === locInput)
		{
			selectedCode = item.LA_code;
			splashButton.disabled = false;

			console.log("Starting with location: " + selectedCode);
			console.log(all_data[selectedCode]);
			return;
		}
	}
	splashButton.disabled = true;
}

async function getLocation()
{
	try 
	{
		let postcodeData = await (await fetch('https://ipapi.co/json/')).json();

		// HACK: usinhg postcode for local dev!
		let locationData = await (await fetch('https://api.postcodes.io/postcodes?q=' + postcodeData['postal'])).json();

		console.log(locationData);

		let _lacode = locationData['result'][0].codes['admin_district'];
		let _laname = locationData['result'][0].admin_district;

		let keys = Object.keys(all_data);
		if(keys.includes(_lacode) && all_data[_lacode].Shg_2011 != 0)
		{
			console.log("found valid location");
			document.querySelector('#location-input').value = _laname;

			locationSelected();
		}
		else
		{
			console.log("location invalid");
		}

		// TODO: test with lat/lon
		//let locationData = await (await fetch('https://api.postcodes.io/postcodes?&limit=1&lat=' + coords['latitude'] + '&lon=' + coords['longitude'])).json();
	}
	catch(error)
	{
		console.error(error);
	}
}

function getLaColourFromData(laCode)
{
	let laData = all_data[laCode];
	if(laData == undefined || laData['Shg_2011'] == 0)
	{
		return 'rgba(128, 128, 128, 1.0)';
	}

	return 'rgba(0, 140, 186, 1.0)';
}

async function loadDataFile()
{
	let locationList = document.querySelector('#locations');

	let rawData = (await (await fetch('./data/data.csv')).text()).split('\r\n');
	let headers = rawData[0].split(',');
	all_data = new Object();

	for(let i = 1; i < rawData.length; i++)
	{
		let cols = rawData[i].split(',');
		let entry = new Object();
		for(let j = 0; j < headers.length; j++)
		{
			entry[headers[j]] = cols[j];
		}

		all_data[cols[0]] = entry;

		if(entry.Shg_2011 != 0)
		{
			let option = document.createElement('option');
   			option.value = entry.Local_authority;
   			locationList.appendChild(option);
		}
	}

	let map = d3.select('#map').append('svg')
	.attr('style', 'height: auto; width: 100%;')
	.attr('viewBox', `0 0 ${mapRelativeWidth} ${mapRelativeHeight}`)

d3.json('./data/england.geojson', function (geojson) {
	let projection = d3.geoMercator()
	let path = d3.geoPath().projection(projection)
	projection.translate([mapRelativeWidth/2, mapRelativeHeight/2])
	projection.center(d3.geoCentroid(geojson))
	projection.scale(mapRelativeScale)
	map.selectAll('path')
		.data(geojson.features)
		.enter()
		.append('path')
		.attr('id', d => d.properties.lad17cd)
		.attr('d', path)
		.attr('fill', d => getLaColourFromData(d.properties.lad17cd))
		.attr('stroke', 'white')
		.on('mouseover', function (d, i, l) { })
		.on('mouseout', function (d, i, l) { })
		.on('click', function (d, i, l) 
		{
			let selectedLa = all_data[d.properties.lad17cd];
			if(selectedLa['Shg_2011'] != 0)
			{
				d3.select('body').classed('selected', true)
				map.selectAll('path').classed('selected', false)
				d3.select(this).classed('selected', true)
				this.parentNode.appendChild(this)

				document.querySelector('#map-label').innerText = selectedLa['Local_authority'].toUpperCase();
				document.querySelector('#num-leavers-data-label').innerText = selectedLa['No_care_leavers'];
				document.querySelector('#shg-data-label').innerText = selectedLa['Shg_2011'];
				document.querySelector('#tax-data-label').innerText = selectedLa['Council_tax_exemption'] == 'TRUE' ? 'Exempt' : 'Not exempt';
				
				let numElem = document.querySelector('#shg-comparison-label');

				let rn = selectedLa['Shg_2011'];
				let nn = rewatchLookbackData['Shg_2011'];
				if(rn > nn)
				{
					numElem.style.color = 'green';
					numElem.innerText = '(£' + (rn - nn) + ' more than ' + rewatchLookbackData['Local_authority'] + ')';
				}
				else if(rn < nn)
				{
					numElem.style.color = 'red';
					numElem.innerText = '(£' + Math.abs(rn - nn) + ' less than ' + rewatchLookbackData['Local_authority'] + ')';
				}
				else
				{
					numElem.style.color = 'gray';
					numElem.innerText = '(The same as ' + rewatchLookbackData['Local_authority'] + ')';; 
				}

				numElem.style.display = 'block';

				let taxElem = document.querySelector('#tax-comparison-label');
				let rt = selectedLa['Council_tax_exemption'];
				let nt = rewatchLookbackData['Council_tax_exemption'];
				
				if(rt == 'TRUE' && nt == 'FALSE')
				{
					taxElem.style.color = 'green';
					taxElem.innerText = '(Better than ' + rewatchLookbackData['Local_authority'] + ')';
				}
				else if(rt == 'FALSE' && nt == 'TRUE')
				{
					taxElem.style.color = 'red';
					taxElem.innerText = '(Worse than ' + rewatchLookbackData['Local_authority'] + ')';
				}
				else
				{
					taxElem.style.color = 'gray';
					taxElem.innerText = '(The same as ' + rewatchLookbackData['Local_authority'] + ')';
				}

				taxElem.style.display = 'block';

				logNewRewatchClick(selectedLa);				
				la_data = selectedLa;
			}
		})
		.append('svg:title')
			.text(d => d.properties.lad17nm)
	})
}
loadDataFile();

async function startExperience() 
{
	let code, name, data;
	let urlParams = new URLSearchParams(window.location.search);

	if(urlParams.has('lacode'))
	{
		code = urlParams.get('lacode');

		if(urlParams.has('override'))
		{
			if(urlParams.has('local') && urlParams.get('local') == 'true')
			{
				actualLocation = code;
			}
			else
			{
				actualLocation = undefined;
			}
		}
	}
	else
	{
		code = selectedCode;
	}

	// try to reduce memory use by destroying splash video
	let videoElement = document.querySelector('#splash-background-video');
	videoElement.parentNode.removeChild(videoElement);

	document.querySelector('#splash-button').style.transition = '2s';	
	document.querySelector('#splash-screen').style.opacity = 0;

	la_data = all_data[code];

	logNewView();

	// load data files
	essentials = (await (await fetch('./data/essentials.csv')).text()).split(/\r?\n/);
	luxuries = (await (await fetch('./data/luxuries.csv')).text()).split(/\r?\n/);
	whiteGoods = (await (await fetch('./data/whiteGoods.csv')).text()).split(/\r?\n/);

	document.querySelector('#story').style.opacity = 1;
	engine.initialise();
	renderer.start();

	renderer.videoContext.registerCallback("ended", function()
	{
		console.log("Playback ended");
		//alert('end callback');
		onFilmEnd();
	});
}

/** Splash screen **/
function showSplash()
{
	document.querySelector('#splash-screen').style.display = 'block';
}

function hideSplash()
{
	startExperience();
}

/** Bank balance indicator **/
function sleep(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

function pushExpense(item, value)
{
	let table = document.querySelector('#expenses-table');

	if(expensesContent.length >= table.rows.length)
	{
		expensesContent.pop();
	}

	expensesContent.unshift(
	{
		'item': item, 
		'value': value, 
		'opacity': 1,
		'color': value >= 0 ? 'green' : 'red'
	});

	bankBalance = parseFloat(bankBalance) + parseFloat(value);

	return value;
}

async function animateExpenses(animationSeq)
{
	for(let i = 0; i < animationSeq.length; i++)
	{
		let item = animationSeq[i];
		pushExpense(item.label, item.value);
		await sleep(item.delay);
	}
}

function addSavingsAndGrant(savings, grant)
{
	let animationSeq = new Array(); 
	animationSeq[0] = {label: "Savings", value: savings, delay: 500};
	animationSeq[1] = {label: "Setting up home grant", value: grant, delay: 0};
	
	animateExpenses(animationSeq);

	return savings + grant;
}

function deductEssentials()
{
	let deduction = 750;
	let total = 0;

	let animationSeq = new Array();
	for(let i = 0; i < essentials.length; i++)
	{
		let vals = essentials[i].split(',');
		let label = vals[0];
		let value = parseFloat(vals[1]);
		total += value;

		animationSeq[i] = {label: label, value: -value, delay: deduction};

		if(deduction > 200)
		{
			deduction -= 100;
		}	
	}

	animateExpenses(animationSeq);

	return total;
}

function deductWhiteGoods(buyNew)
{
	let delay = 1000;
	let total = 0;

	let animationSeq = new Array();
	for(let i = 0; i < whiteGoods.length; i++)
	{
		let vals = whiteGoods[i].split(',');
		let label = (buyNew ? 'New ' : '2nd hand ') + vals[0];
		let value = parseFloat(buyNew ? vals[1] : vals[2]);
		total += value;

		animationSeq[i] = {label: label, value: -value, delay: delay};
	}

	animateExpenses(animationSeq);
	return total;
}

function deductLuxuries()
{
	let delay = 500;
	let total = 0;

	let animationSeq = new Array();
	for(let i = 0; i < luxuries.length; i++)
	{
		let vals = luxuries[i].split(',');
		let label = vals[0];
		let value = parseFloat(vals[1]);
		total += value;

		animationSeq[i] = {label: label, value: -value, delay: delay};
		//pushExpense(label, value);
		//await sleep(delay);
	}

	animateExpenses(animationSeq);
	return total;	
}

function deductCouncilTax(leaName, amount)
{
	pushExpense("Council tax in " + leaName, -amount);
	return amount;
}

async function updateExpensesTable()
{
	if(expensesContent.length > 0)
	{
		let fadeRate = 0.0375;
		let table = document.querySelector('#expenses-table');

		for(let i = expensesContent.length - 1; i >= 0; i--)
		{
			let slot = table.rows[table.rows.length - (i + 1)].cells[0];
			let expense = expensesContent[i];
			expense.opacity = expense.opacity - (fadeRate + (fadeRate * i));

			let cellContent = '<span>' + (expense.item + ' <span style="color:' + expense.color + '">£' + expense.value) + '</span></span>';
			if(expense.value > 0)
			{
				cellContent = cellContent.replace('£', '+£');
			}
			else
			{
				cellContent = cellContent.replace('£-', '-£');
			}

			slot.innerHTML = cellContent;

			if(expense.opacity == 1)
			{
				slot.style.transition = '0s';
			}
			else
			{
				slot.style.transition = '0.25s';
			}
			
			slot.style.opacity = expense.opacity;
		}
	}
}

async function animateBankBalance()
{
	if(currentVal != bankBalance)
	{
		let overshot = false;

		if(currentVal < bankBalance)
		{
			currentVal = parseFloat(currentVal) + parseFloat(Math.random() * 20);
			overshot = currentVal > bankBalance;
		}
		else if(currentVal > bankBalance)
		{
			currentVal = parseFloat(currentVal) - parseFloat(Math.random() * 20);
			overshot = currentVal < bankBalance;
		}

		if(overshot)
		{
			currentVal = bankBalance;
		}	

		let bankBalanceLabel = document.querySelector('#bank-balance-label');
		bankBalanceLabel.innerText = parseFloat(currentVal).toFixed(2);
		bankBalanceLabel.style.color = (parseFloat(currentVal).toFixed(2) < 0.0) ? 'red' : 'white';
	}
}

function showBankBalance()
{
	document.querySelector('#bank-balance').style.opacity = 1;

	expensesContent = new Array();
	balanceUpdater = setInterval(() =>
	{
		animateBankBalance();
	}, 100);

	expensesUpdater = setInterval(() =>
	{
		updateExpensesTable();
	}, 250);
}

function hideBankBalance()
{
	document.querySelector('#bank-balance').style.opacity = 0;

	if(expensesUpdater != undefined) 
	{
		clearInterval(expensesUpdater);
	}

	if(balanceUpdater != undefined)
	{
		clearInterval(balanceUpdater);
	}
}

/** Ending and re-watch **/
function onFilmEnd()
{
	//hideBankBalance();

	document.querySelector('#story').style.opacity = 0;
	
	// try to reduce memory use by destroying splash video
	let vcCanvas = document.querySelector('#story');
	vcCanvas.parentNode.removeChild(vcCanvas);

	if(rewatchEnabled)
	{
		rewatchLookbackData = la_data;

		document.querySelector('#map-label').innerText = la_data['Local_authority'].toUpperCase();
		document.querySelector('#num-leavers-data-label').innerText = la_data['No_care_leavers'];
		document.querySelector('#shg-data-label').innerText = la_data['Shg_2011'];
		document.querySelector('#tax-data-label').innerText = la_data['Council_tax_exemption'] == 'TRUE' ? 'Exempt' : 'Not exempt';

		document.querySelector('#map-page').style.display = 'block';
		document.querySelector('#map-page').style.opacity = 1;
		document.querySelector('#map-page').style.pointerEvents = 'all';	
	}
}

function rewatch()
{
	let uri = './index.html';
	uri += '?lacode=' + la_data['LA_code'];
	uri += '&skipSplash=true';
	uri += '&rw=' + rewatchEnabled;
	uri += '&pid=' + pid;

	if(loggingKey != undefined)
	{
		uri += '&lk=' + loggingKey;
	}

	window.canvas = undefined;
	window.engine = undefined;
	window.renderer.videoContext = undefined;
	window.renderer = undefined;
	//window.location.href = uri;
	window.location.assign(uri);
}

/** Cutting room interface and dynamic text **/
window.canvas = document.getElementById('story');
window.engine = new OBBEngine()
window.engine.initRendererWithCanvas(window.canvas)
window.renderer = engine.getRenderer()
window.renderer.videoContext._playbackRate = 1;

renderer.setInteractionFunctions({ ...functionTree['Interaction'], Default(wc, { id, type }, data) 
{
	let elem = document.querySelector("#textOverlay");

	if (type === 'start') 
	{
		if (data.content) 
		{
			elem.innerText = data.content.replace(/\[(.+?)\]/g, (match, name) => la_data[name]);

			if(data['transition-in'])
			{
				elem.style.transition = data['transition-in'];
			}
			else
			{
				elem.style.transition = '0.5s';
			}

			Object.assign(elem.style, 
			{
				opacity: 1
			}, data);

			// NOTE: setting interaction complete in start allows for pre-caching before the text is removed
			wc.setInteractionComplete(id);
		}
	}
	else if (type === 'end') 
	{
		if(data['transition-out'])
		{
			elem.style.transition = data['transition-out'];
		}
		else
		{
			elem.style.transition = '0.5s';
		}

		if (data.content) 
		{
			elem.style.opacity = 0;
		}

		// NOTE: may be redundant as now called in start
		wc.setInteractionComplete(id);
	}
} })
engine.restoreEngine(engineModule);
engine.restoreFunctions(functionTree);

window.onload = function()
{
	let urlParams = new URLSearchParams(window.location.search);

	getLocation();
	checkCompatibleBrowserAndDevice();

	if(urlParams.has('rw'))
	{
		rewatchEnabled = urlParams.get('rw') == 'true';
	}

	if(urlParams.has('pid'))
	{
		pid = urlParams.get('pid');
	}

	if(urlParams.has('lk'))
	{
		loggingKey = urlParams.get('lk');
	}

	if(urlParams.has('local'))
	{
		local = urlParams.get('local') == 'true';
	}

	if(urlParams.has('skipSplash'))
	{
		startExperience();
	}
	else
	{
		showSplash();
	}
};