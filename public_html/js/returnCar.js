function updateRented(odometer){
	var input = {odometer_return: odometer};
	$.ajax({
		url: "../queries/updateRented.php",
		type: "POST",
		data: input,
		dataType: 'json',
		success: function(data) {
			if(data === true){
				document.location.href = "homePage.html";
			}else{
				debugger;
			}		
		},
		error: function (error) {
			debugger;
		}
	});
}

window.addEventListener("load", function(){
	var btn = document.querySelector("#returnButton");
	btn.addEventListener("click", function(){
		var odometer = document.querySelector("#odometerInput").value;
		updateRented(odometer);
	});
});