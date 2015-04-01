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

	$cid = $_POST['cid'];
	$text = $_POST['text'];

	$query = "INSERT INTO REPLY(Admin_ID, C_ID, text)
	VALUES(1, $cid, '$text');";

	$result = mysqli_query($cxn, $query) or trigger_error(mysql_error()." ".$query);

	echo json_encode($result);
?>