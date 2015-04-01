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

	$lid = $_SESSION["L_ID"];
	$startDate = $_POST["startDate"];
	$finishDate = $_POST["endDate"];

	$query = "SELECT *
	FROM CAR
	WHERE L_ID=$lid and VIN NOT IN (
        SELECT VIN
        FROM RESERVATION
        WHERE pickup <= '$startDate' AND dropoff >= '$finishDate'
    );";

	$result = mysqli_query($cxn, $query) or trigger_error(mysql_error()." ".$query);

	$data = [];
	$i = 0;
	while($row = mysqli_fetch_assoc($result)){
		$data[$i] = $row;
		$i = $i + 1;
	}

	echo json_encode($data);
?>