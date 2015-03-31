<?php
	$host = 'localhost';
	$user = 'paulwells';
	$pass = 'robinson';
	$db = 'k_town_car_share';
	$cxn = mysqli_connect($host, $user, $pass, $db);
	if (mysqli_connect_errno()){
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

	$mid = $_POST['mid'];
	$name = $_POST['name'];
	$streetNumber = $_POST['streetNumber'];
	$streetName = $_POST['streetName'];
	$apartmentNumber = $_POST['apartmentNumber'];
	$city = $_POST['city'];
	$province = $_POST['province'];
	$postalCode = $_POST['postalCode'];
	$email = $_POST['email'];
	$phoneNumber = $_POST['phoneNumber'];
	$driversLicense = $_POST['driversLicense'];
	$creditCardNumber = $_POST['creditCardNumber'];
	$creditCardExpiry = $_POST['creditCardExpiry'];
	$username = $_POST['username'];
	$password = $_POST['password'];
	$anniversary = $_POST['anniversary'];

	$query = "INSERT INTO MEMBER(M_ID, name, username, street_number, street_name, apt_number, city, province, postal_code, email, drivers_license, creditcard_number, creditcard_expirydate, registration_anniversarydate, password, phone_number) 
	VALUES($mid, '$name', '$username', $streetNumber, '$streetName', $apartmentNumber, '$city', '$province', '$postalCode', '$email', '$driversLicense', '$phoneNumber', $creditCardExpiry, $anniversary, '$password', '$phoneNumber');";

	$result = mysqli_query($cxn, $query) or trigger_error(mysql_error()." ".$query);
	/*$data = [];
	$i = 0;
	while($row = mysqli_fetch_assoc($result)){
		$data[$i] = $row;
		$i = $i + 1;
	}
	*/
	echo json_encode($result);
?>