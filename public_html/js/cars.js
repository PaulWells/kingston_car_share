function displayCars(data){
    $('#carsTable').bootstrapTable({
        data: data
    });
}

function fetchCars(){
	var startVal = document.querySelector("#startInput").value;
	var endVal = document.querySelector("#endInput").value;

	var input = {startDate: startVal, endDate: endVal};

	$.ajax({
		url: "../queries/fetchCars.php",
		type: "POST",
		data: input,
		dataType: 'json',
		success: function(data) {
			if(data.length > 0){
				displayCars(data);
			}else{

			}
		},
		error: function (error) {
			debugger;
		}
	});
}

function makeReservation(){
	var vinVal = document.querySelector("#carInput").value;
	var pickupVal = document.querySelector("#startInput").value;
	var endVal = document.querySelector("#endInput").value;
	var input = {vin: vinVal, pickup: pickupVal, dropoff: endVal};
	$.ajax({
		url: "../queries/reserveCar.php",
		type: "POST",
		data: input,
		dataType: 'json',
		success: function(data) {
			if(data === true){
				navigateToHomePage();
			}else{
				alert("Failed to make a reservation");
			}
		},
		error: function (error) {
			debugger;
		}
	});
}

function navigateToHomePage(){
	document.location.href = "homePage.html";
}

window.addEventListener("load", function(){
	var btn = document.querySelector("#carButton");
	var querybtn = document.querySelector("#queryButton")

	btn.addEventListener("click", function(){
		makeReservation();
	});
	querybtn.addEventListener("click", function(){
		fetchCars();
	});
});