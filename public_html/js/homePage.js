function submitComment(){
	var commentVal = document.querySelector("#commentTextArea").value;
	var input = {comment: commentVal};

	$.ajax({
		url: "../queries/submitGeneralComment.php",
		type: "POST",
		data: input,
		dataType: 'json',
		success: function(data) {
			if(data === true){
				alert("successfully submitted comment");
				document.querySelector("#commentTextArea").value = "";
			}
		},
		error: function (error) {
			debugger;
		}
	});
}

function displayReservationData(data){
	$(function () {
    $('#reservationTable').bootstrapTable({
        data: data
    });
});
}

function fetchReservationData(){
	$.ajax({
		url: "../queries/selectActiveReservations.php",
		type: "POST",
		dataType: 'json',
		success: function(data) {
			if(data.length > 0){
				displayReservationData(data);
			}else{

			}
		},
		error: function (error) {
			debugger;
		}
	});
}

function navigateToRentalHistory(){
	document.location.href = "rentalHistory.html";
}
function navigateToReserveCar(){
	document.location.href = "locations.html";
}
function navigateToReturnCar(){
	document.location.href = "returnCar.html";
}

function setReservationIDInSession(id){
	var input = {reservation_id: id};
	$.ajax({
		url: "../queries/setReservationID.php",
		type: "POST",
		data: input,
		dataType: 'json',
		success: function(data) {
			navigateToReturnCar();
		},
		error: function (error) {
			debugger;
		}
	});
}

window.addEventListener("load", function(){
	var btn = document.querySelector("#commentButton");
	var rentalHistoryButton = document.querySelector("#rentalHistoryButton");
	var reserveButton = document.querySelector("#reserveButton");
	var returnCarButton = document.querySelector("#returnCarButton");
	var returnCarInput = document.querySelector("#returnCarInput");
	btn.addEventListener("click", function(){
		submitComment();
	});
	rentalHistoryButton.addEventListener("click", function(){
		navigateToRentalHistory();
	});
	reserveButton.addEventListener("click", function(){
		navigateToReserveCar();
	});
	returnCarButton.addEventListener("click", function(){
		var reservation_ID = returnCarInput.value;
		setReservationIDInSession(reservation_ID);
	});
	fetchReservationData();
});