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
	

	$query = "SELECT *
	FROM CAR LEFT JOIN (
		SELECT RESERVATION.VIN, COUNT(*) AS rented_count
		FROM RENTED INNER JOIN RESERVATION ON RENTED.reservation_id = RESERVATION.reservation_id
		GROUP BY RESERVATION.VIN
		) T
	ON CAR.VIN = T.VIN
	WHERE L_ID = $lid
	ORDER BY rented_count ASC";

	$result = mysqli_query($cxn, $query) or trigger_error(mysql_error()." ".$query);

	$data = [];
	$i = 0;
	while($row = mysqli_fetch_assoc($result)){
		$data[$i] = $row;
		$i = $i + 1;
	}

	echo json_encode($data);
?>