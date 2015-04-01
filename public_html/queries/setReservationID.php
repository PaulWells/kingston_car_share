<?php
	session_start();
	$_SESSION['reservation_id'] = $_POST['reservation_id'];
	echo true;
?>