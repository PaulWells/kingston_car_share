function addCar(midVal){

	var makeVal = document.querySelector("#makeInput").value;
	var modelVal = document.querySelector("#modelInput").value;
	var yearVal = document.querySelector("#yearInput").value;


	input = {
		make: makeVal,
		model: modelVal,
		year: yearVal,
	};

	$.ajax({
		url: "../queries/addCar.php",
		type: "POST",
		data: input,
		dataType: 'json',
		success: function(data) {
			if(data === true){
				alert("Successful Entry");
				document.querySelector("#makeInput").value = "";
				document.querySelector("#modelInput").value = "";
				document.querySelector("#yearInput").value = "";

			}else{
				// Failure
				debugger;
			}

		},
		error: function (error) {
			debugger;
		}
	});
	return false;
}

window.addEventListener("load", function(){
	
	var addCarButton = document.querySelector("#addCarButton");
	addCarButton.addEventListener("click", function(){
		addCar();
	});


});