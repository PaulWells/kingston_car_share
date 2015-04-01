<?php
	session_start();
	$host = 'localhost';
	$user = 'paulwells';
	$pass = 'robinson';
	$db = 'k_town_car_share';
	$cxn = mysqli_connect($host, $user, $pass, $db);
	if (mysqli_connect_errno()){
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

	$query = "SELECT MAX(VIN)
	FROM Car;";
	$result = mysqli_query($cxn, $query) or trigger_error(mysql_error()." ".$query);
	$data = [];
	$i = 0;
	while($row = mysqli_fetch_assoc($result)){
		$data[$i] = $row;
		$i = $i + 1;
	}
	//echo json_encode($data);
	$vin = intval($data[0]['MAX(VIN)']) + 1;
	$make = $_POST['make'];
	$model = $_POST['model'];
	$year = $_POST['year'];

	$query = "INSERT INTO Car(VIN, make, model, year)
	VALUES($vin, '$make', '$model', $year);";

	$result = mysqli_query($cxn, $query) or trigger_error(mysql_error()." ".$query);

	echo json_encode($result);
?>