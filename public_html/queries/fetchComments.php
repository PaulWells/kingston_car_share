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

	$order = $_POST['order'];

	$query = "SELECT *
	FROM COMMENTS
	ORDER BY time $order;";

	$result = mysqli_query($cxn, $query) or trigger_error(mysql_error()." ".$query);

	$data = [];
	$i = 0;
	while($row = mysqli_fetch_assoc($result)){
		$data[$i] = $row;
		$i = $i + 1;
	}

	echo json_encode($data);
?>