<?php
	$host = 'localhost';
	$user = 'paulwells';
	$pass = 'robinson';
	$db = 'k_town_car_share';
	$cxn = mysqli_connect($host, $user, $pass, $db);
	if (mysqli_connect_errno()){
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

	$username = $_POST['username'];
	$password = $_POST['password'];

	$query = "SELECT * 
	FROM ADMIN
	WHERE name='$username' AND password='$password';";

	$result = mysqli_query($cxn, $query) or trigger_error(mysql_error()." ".$query);
	$data = [];
	$i = 0;
	while($row = mysqli_fetch_assoc($result)){
		$data[$i] = $row;
		$i = $i + 1;
	}

	echo json_encode($data);
?>