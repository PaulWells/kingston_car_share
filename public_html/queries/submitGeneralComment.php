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

	$query = "SELECT MAX(C_ID)
	FROM COMMENTS;";
	$result = mysqli_query($cxn, $query) or trigger_error(mysql_error()." ".$query);
	$data = [];
	$i = 0;
	while($row = mysqli_fetch_assoc($result)){
		$data[$i] = $row;
		$i = $i + 1;
	}
	//echo json_encode($data);
	$cid = intval($data[0]['MAX(C_ID)']) + 1;
	$mid = $_SESSION['mid'];
	$comment = $_POST['comment'];
	$time = $date = date('Y-m-d H:i:s');

	$query = "INSERT INTO COMMENTS(C_ID, M_ID, comment, time)
	VALUES($cid, $mid, '$comment', '$time');";

	$result = mysqli_query($cxn, $query) or trigger_error(mysql_error()." ".$query);

	echo json_encode($result);
?>