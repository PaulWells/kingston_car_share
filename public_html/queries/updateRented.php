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

	$odometer_return = $_POST['odometer_return'];
	$reservation_id = $_SESSION['reservation_id'];

	$query = "UPDATE RENTED
	SET odometer_return=$odometer_return,end_time=NOW()
	WHERE reservation_ID=$reservation_id;";

	$result = mysqli_query($cxn, $query) or trigger_error(mysql_error()." ".$query);

	echo json_encode($result);
?>


