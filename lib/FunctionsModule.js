var functionTree = {
	 "Output Selection": {
		"Default": (wc, no, defaultOutputID, outputIDs) => { 
return defaultOutputID;
},
		"settingUpHome": (wc, no, defaultOutputID, outputIDs) => { 
	if (wc.bankValue > wc.affordLaptopAndLuxuries) 
	{
	    wc.laptop = true;
	    wc.newWashing = true;
	    // wc.bank = val;
	    // need to calculate the new bank balance before returning new val
	    return wc.getOutputByName(outputIDs, "set_up_new_wm_laptop");
	}
	else if (wc.bankValue > wc.affordNewWhiteGoods) 
	{
	    wc.laptop = false;
	    wc.newWashing = true;
	    // wc.bank = val;
	    // need to calculate the new bank balance before returning new val
	    return wc.getOutputByName(outputIDs, "set_up_new_wm");
	}
	else 
	{
	   wc.laptop = false;
	   wc.newWashing = false;
	    // wc.bank = val;
	    // need to calculate the new bank balance before returning new val
	   return wc.getOutputByName(outputIDs, "set_up_old_wm");
	}
},
		"councilTaxStatus": (wc, no, defaultOutputID, outputIDs) => { 
	if (wc.laptop == true) 
	{
	    if (wc.councilTaxExempt == true) 
	    {
            return wc.getOutputByName(outputIDs, "laptop_ct_exempt");
	    }
	    else 
	    {
	        return wc.getOutputByName(outputIDs, "laptop_not_ct_exempt");
	    }
	}
	else if (wc.laptop == false) 
	{
	    if (wc.councilTaxExempt == true) 
	    {
	        return wc.getOutputByName(outputIDs, "library_ct_exempt");
	    }
	    else 
	    {
	        return wc.getOutputByName(outputIDs, "library_not_ct_exempt");
	    }
    }
},
		"needAJob": (wc, no, defaultOutputID, outputIDs) => { 
	if (wc.bankValue >= wc.enough && wc.laptop == true) 
	{
	    wc.jobChance ++;
	    // SCQ: in this instance, she has a laptop so in theory her job chance 
	    // does go up but not to get a cashier job, but to look for something she really wants
	     return wc.getOutputByName(outputIDs, "cv_home");
	}
	else if (wc.bankValue >= wc.enough && wc.laptop == false) 
	{
	    wc.jobChance --;
	    return wc.getOutputByName(outputIDs, "cv_library");
	    
	}
	else if (wc.bankValue < wc.enough && wc.laptop == true)
	{
	    wc.jobChance ++;
	    return wc.getOutputByName(outputIDs, "laptop_job_search");
	}
	else if (wc.bankValue < wc.enough && wc.laptop == false) 
	{
	    wc.jobChance --;
	    return wc.getOutputByName(outputIDs, "library_job_search");
	}
	else
	{
	    console.log("error no output chosen needAJob");   
	}
},
		"howThingsPanOut": (wc, no, defaultOutputID, outputIDs) => { 
	if (wc.newWashing == false) 
	{
	    wc.jobChance--;
	    return wc.getOutputByName(outputIDs, "broken_wm");
	        //send to broken wm scene
	}
	else 
	{    
	    if (wc.bankValue > wc.enough) 
	    {
	        wc.jobChance++;
	        return wc.getOutputByName(outputIDs, "jobOutcome");
	    }
	    else 
	    {
	     //I have removed this as the job chance goes down because they are poor 
	     //and have to sell guitar but goes up because thneir washing machine doesn't break
	      //wc.jobChance--;
	        //wc.bankValue += 70; // what is this 70?
	        return wc.getOutputByName(outputIDs, "sell_guitar");
	    }
	}
},
		"doThingsGetWorse": (wc, no, defaultOutputID, outputIDs) => { 
    if (wc.bankValue < wc.enough) 
    {
        wc.jobChance--;
        return wc.getOutputByName(outputIDs, "sell_guitar_bad");
	        //send to sell guitar
	}
    if (wc.bankValue >= wc.enough && wc.jobChance >= wc.jobOutcomeInterview) 
    {
	//    return wc.getOutputByName(outputIDs, "music_recording");
    //}
    //else 
    //{
        return wc.getOutputByName(outputIDs, "jobOutcome");
    }
    
    // JON DEBUG 6/2/2019
    // There is a chance no output will be returned here, so putting job outcome as default
    console.log("using default fallback in doThingsGetWorse");
    return wc.getOutputByName(outputIDs, "jobOutcome");
},
		"finalDecline": (wc, no, defaultOutputID, outputIDs) => { 
    if (wc.bankValue < wc.enough)
    {
        wc.jobChance--;
        return wc.getOutputByName(outputIDs, "bills");
    }
    else 
    {
        return wc.getOutputByName(outputIDs, "jobOutcome");
    }
},
		"FinalOutcome": (wc, no, defaultOutputID, outputIDs) => { 
    if (wc.jobChance <= wc.jobOutcomeBailiffs) 
    {
        return wc.getOutputByName(outputIDs, "bills");
	}
    else if (wc.jobChance <= wc.jobOutcomeCashier && wc.brookeCafeWork == true) 
    {
        return wc.getOutputByName(outputIDs, "mediocre_text_already_job");
    }
    else if (wc.jobChance <= wc.jobOutcomeCashier)
    {
        return wc.getOutputByName(outputIDs, "mediocre_text");
    }
    
    else if (wc.guitarSold == true)
    {
        return wc.getOutputByName(outputIDs, "mediocre_text");
    }
    else//if (wc.jobChance <= wc.jobOutcomeInterview) 
    {
        return wc.getOutputByName(outputIDs, "music_recording");
    }
},
},
	 "Group Selection": {
		"Default": (groupNOs, wc) => { 
	return groupNOs[0] 
},
},
	 "Layer Selection": {
		"Default": (master, others, wc) => { 
	return [master, ...others];
},
},
	 "Interaction": {
		"Default": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':

			break;
		case 'end':
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"setup": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    // set thresholds for what's bought with grant
		    wc.affordLaptopAndLuxuries = 2194.63;
		    wc.affordNewWhiteGoods = 1676.20;
		    
		    //set bank balance threshold for enough
		    wc.enough = 0;
		    //set bank jobChance variable to zero
            wc.jobChance = 4; 
            //set job chance thresholds - specific numbers will need adjusting
            wc.jobOutcomeBailiffs = 1;
            wc.jobOutcomeCashier = 3;
            wc.jobOutcomeInterview = 4;
            wc.brookeCafeWork = false;
            // initialise bank account
            wc.savings = 234;
            wc.shg = parseFloat(la_data['Shg_2011']);
            wc.bankValue = wc.shg + wc.savings;
          
            // initialise council tax exemption
            wc.councilTaxExempt = la_data['Council_tax_exemption'] == 'TRUE' ? true : false;
            wc.councilTaxAmount = Math.round(la_data['Council_tax_d'] / 12);

            // initialise wages for cashier work - might want this to be locally
            //determined and in main data spreadsheet
            wc.dayRate = 47.20;
            // initialise income from guitar sale
            wc.guitar = 55.0;
            wc.laptopComputer = 199.97;
            wc.guitarSold = false;
            
            // initialise others
            wc.laName = la_data['Local_authority'];

		    wc.getOutputByName = function(outputIDs, name) 
		    {
	            var result = undefined;
	            for(var i = 0; i < outputIDs.length; i++)
	            {
	                if(engine.getNarrativeObject(outputIDs[i]).data.name == name)
	                {
	                    result = outputIDs[i];
	                }
	            }
	            
	            if (result == undefined) 
	            {
	                console.log("not found!!!: " + name);
	            }
	            
	            return result;
	        }
			break;
		case 'end':
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"revealBankIndicator": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
            showBankBalance();
            addSavingsAndGrant(wc.savings, wc.shg);
			break;
		case 'end':
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"buyEssentialItems": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    wc.bankValue -= deductEssentials();
			break;
		case 'end':
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"buyWhiteGoods": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    wc.bankValue -= deductWhiteGoods(wc.newWashing);
			break;
		case 'end':
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"buyLuxuries": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    wc.bankValue -= deductLuxuries();
			break;
		case 'end':
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"payCouncilTax": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
			wc.bankValue -= deductCouncilTax(wc.laName, wc.councilTaxAmount);
			break;
		case 'end':
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"sellGuitar": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    wc.bankValue += pushExpense("Guitar", wc.guitar);
		    wc.guitarSold = true;
		    break;
		case 'end':
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"GetPaidForWork": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    wc.bankValue += pushExpense("Wages", wc.dayRate);
            wc.brookeCafeWork = true;
		    break;
		case 'end':
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"GetsGuitar": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
            wc.bankValue += pushExpense("Guitar", -wc.guitar);
			break;
		case 'end':
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"logEnd": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    logViewingComplete();
			break;
		case 'end':
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"buyLaptop": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
            wc.bankValue += pushExpense("Laptop", -wc.laptopComputer);
			break;
		case 'end':
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"hideBankIndicator": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    hideBankBalance();
		    wc.setInteractionComplete(interact.id);
			break;
		case 'end':
			wc.setInteractionComplete(interact.id);
			break;
	}
},
},
};