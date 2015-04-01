function submitComment(){
	var vinVal = document.querySelector("#vehicleInput").value;
	var commentVal = document.querySelector("#commentTextArea").value;
	var input = {comment: commentVal, vin: vinVal};
	$.ajax({
		url: "../queries/submitVehicleComment.php",
		type: "POST",
		data: input,
		dataType: 'json',
		success: function(data) {
			debugger;
			if(data === true){
				document.querySelector("#commentTextArea").value = "";
				document.querySelector("#vehicleInput").value = "";
			}
		},
		error: function (error) {
			debugger;
		}
	});
}

function displayRentalHistory(data){
    $('#rentalHistoryTable').bootstrapTable({
        data: data
    });
}

function fetchRentalHistory(){
	$.ajax({
		url: "../queries/rentalHistory.php",
		type: "POST",
		dataType: 'json',
		success: function(data) {
			if(data.length > 0){
				displayRentalHistory(data);
			}else{

			}
		},
		error: function (error) {
			debugger;
		}
	});
}


window.addEventListener("load", function(){
	fetchRentalHistory();
	var btn = document.querySelector("#commentButton");
	btn.addEventListener("click", function(){
		submitComment();
	});
});