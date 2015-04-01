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

	$query = "SELECT MAX(reservation_ID)
	FROM RESERVATION;";
	$result = mysqli_query($cxn, $query) or trigger_error(mysql_error()." ".$query);
	$data = [];
	$i = 0;
	while($row = mysqli_fetch_assoc($result)){
		$data[$i] = $row;
		$i = $i + 1;
	}
	//echo json_encode($data);
	$reservation_ID = intval($data[0]['MAX(reservation_ID)']) + 1;
	$vin = $_POST['vin'];
	$mid = $_SESSION['mid'];
	$date = date('Y-m-d H:i:s');
	$lid = $_SESSION['L_ID'];
	$pickup = $_POST['pickup'];
	$dropoff = $_POST['dropoff'];

	$query = "INSERT INTO RESERVATION(reservation_id, VIN, M_ID, date, L_ID, pickup, dropoff)
	VALUES($reservation_ID, $vin, $mid, '$date', $lid, '$pickup', '$dropoff');";

	$result = mysqli_query($cxn, $query) or trigger_error(mysql_error()." ".$query);

	echo json_encode($result);
?>