function navigateToHomePage() {
	document.location.href = "homePage.html";
}

function getToday(){
	var d = new Date();

	var month = d.getMonth()+1;
	var day = d.getDate();

	var output = d.getFullYear() + '-' +
	    (month<10 ? '0' : '') + month + '-' +
	    (day<10 ? '0' : '') + day;
	return output;
}

function register(midVal){

	var nameVal = $("#inputName")[0].value;
	var streetNumberVal = $("#inputStreetNumber")[0].value;
	var streetNameVal = $("#inputStreetName")[0].value;
	var apartmentNumberVal = $("#inputApartmentNumber")[0].value;
	var cityVal = $("#inputCity")[0].value;
	var provinceVal = $("#inputProvince")[0].value;
	var postalCodeVal = $("#inputPostalCode")[0].value;
	var emailVal = $("#inputEmail")[0].value;
	var phoneNumberVal = $("#inputPhoneNumber")[0].value;
	var driversLicenseVal = $("#inputDriversLicense")[0].value;
	var creditCardNumberVal = $("#inputCreditCardNumber")[0].value;
	var creditCardExpiryVal = $("#inputCreditCardExpiryDate")[0].value;
	var usernameVal = $("#inputUserName")[0].value;
	var passwordVal = $("#inputPassword")[0].value;
	var today = getToday();

	input = {
		mid: midVal,
		name: nameVal,
		streetNumber: streetNumberVal,
		streetName: streetNameVal,
		apartmentNumber: apartmentNumberVal,
		city: cityVal,
		province: provinceVal,
		postalCode: postalCodeVal,
		email: emailVal,
		phoneNumber: phoneNumberVal,
		driversLicense: driversLicenseVal,
		creditCardNumber: creditCardNumberVal,
		creditCardExpiry: creditCardExpiryVal,
		username: usernameVal,
		password: passwordVal,
		anniversary: today
	};

	$.ajax({
		url: "../queries/register.php",
		type: "POST",
		data: input,
		dataType: 'json',
		success: function(data) {
			if(data === true){
				navigateToHomePage():
			}else{
				// Failure
				debugger;
			}
			
			return false;

		},
		error: function (error) {
			debugger;
			return false;
		}
	});
	return false;
}

function getMemberID(){
	$.ajax({
		url: "../queries/nextMID.php",
		type: "POST",
		dataType: 'json',
		success: function(data) {
			var mid = parseInt(data[0]['MAX(M_ID)']) + 1;
			register(mid);
			//return false;
		},
		error: function (error) {
			debugger;
			return false;
		}
	});
	return false;
}

window.addEventListener("load", function(){
	
	var submitButton = $("#submit-btn")[0];
	submitButton.addEventListener("click", function(e){
		// Have to get the member ID before inserting element
		// into the table
		getMemberID();
		return false;
	});


});