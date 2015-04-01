function displayCars(data){
	$('#carsTable').bootstrapTable('destroy');
    $('#carsTable').bootstrapTable({
        data: data
    });
}

function fetchAllCars(){

	$.ajax({
		url: "../queries/fetchAllCars.php",
		type: "POST",
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

function fetchAvailableCars(){

	$.ajax({
		url: "../queries/fetchAvailableCars.php",
		type: "POST",
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

function fetchDistanceCars(){

	$.ajax({
		url: "../queries/fetchDistanceCars.php",
		type: "POST",
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

function fetchSortCars(){

	$.ajax({
		url: "../queries/fetchSortCars.php",
		type: "POST",
		dataType: 'json',
		success: function(data) {
			alert("success");
			if(data.length > 0){
				displayCars(data);
			}else{

			}
		},
		error: function (error) {
			alert("failure");
			debugger;
		}
	});
}


function navigateToHomePage(){
	document.location.href = "homePage.html";
}

window.addEventListener("load", function(){
	var allBtn = document.querySelector("#allCarsButton");
	var availableBtn = document.querySelector("#availableCarsButton");
	var distanceBtn = document.querySelector("#distanceCarsButton");
	var sortBtn = document.querySelector("#sortCarsButton");
	fetchAllCars();
	allBtn.addEventListener("click", function(){
		fetchAllCars();
	});
	availableBtn.addEventListener("click", function(){
		fetchAvailableCars();
	});
	distanceBtn.addEventListener("click", function(){
		fetchDistanceCars();
	});
	sortBtn.addEventListener("click", function(){
		fetchSortCars();
	});
	
	
});