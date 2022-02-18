<?php 
	require_once 'meekrodb.2.3.class.php';
	DB::$user = 'root';
	DB::$password = 'root';
	DB::$dbName = 'blh_logging';
	DB::$host = 'localhost';
	DB::$port = '8889';

	$GLOBALS['validKey'] = 'ghDf736';

	function newView()
	{
		$data = array(
			'pid' => $_REQUEST['pid'],
			'local' => ($_REQUEST['local'] == 'true'),
			'rewatch' => ($_REQUEST['rewatch'] == 'true'),
			'la_code' => $_REQUEST['la_code'],
			'la_name' => $_REQUEST['la_name'],
			'exempt' => ($_REQUEST['exempt'] == 'TRUE'),
			'tax_rate' => $_REQUEST['tax_rate'],
			'grant' => $_REQUEST['grant']
		);

		$result = DB::insert('viewing', $data);
		if($result)
		{
			echo DB::insertId();
		}
		else
		{
			echo '-1';
		}
	}

	function newAtom()
	{
		$data = array(
			'viewing_id' => $_REQUEST['pk'],
			'atom_id' => $_REQUEST['atom_id'],
			'atom_name' => $_REQUEST['atom_name']
		);

		$result = DB::insert('atom', $data);
		if($result)
		{
			echo DB::insertId();
		}
		else
		{
			echo '-1';
		}
	}

	function newRewatchClick()
	{
		$data = array(
			'viewing_id' => $_REQUEST['pk'],
			'la_code' => $_REQUEST['la_code'],
			'la_name' => $_REQUEST['la_name'],
			'grant' => $_REQUEST['grant'],
			'exempt' => ($_REQUEST['exempt'] == 'TRUE'),
			'local' => ($_REQUEST['local'] == 'true')
		);

		$result = DB::insert('rewatch_browse', $data);
		if($result)
		{
			echo DB::insertId();
		}
		else
		{
			echo '-1';
		}

	}

	function viewComplete()
	{
		$result = DB::update('viewing', array(
		  'complete' => 1, 
		  ), "id=%i", $_REQUEST['pk']);

		echo $result;
	}

	function processRequest()
	{
		$key = $_REQUEST['key'];
		$method = $_REQUEST['method'];

		if($key == $GLOBALS['validKey'])
		{
			if($method == 'newView')
			{
				return newView();
			}
			else if($method == 'newAtom')
			{
				return newAtom();
			}
			else if($method == 'newRewatchClick')
			{
				return newRewatchClick();
			}
			else if($method == 'viewComplete')
			{
				return viewComplete();
			}
		}			
		else
		{
			return 'error: invalid key';
		}	
	}

	echo processRequest();
?>