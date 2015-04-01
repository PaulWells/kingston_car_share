function displayLocations(data){
    $('#locationsTable').bootstrapTable({
        data: data
    });
}

function fetchLocations(){
	$.ajax({
		url: "../queries/fetchLocations.php",
		type: "POST",
		dataType: 'json',
		success: function(data) {
			if(data.length > 0){
				displayLocations(data);
			}else{

			}
		},
		error: function (error) {
			debugger;
		}
	});
}

function setLocationInSession(lid){
	var input = {L_ID: lid};
	$.ajax({
		url: "../queries/setLocation.php",
		type: "POST",
		data: input,
		dataType: 'json',
		success: function(data) {
			document.location.href = "cars.html";
		},
		error: function (error) {
			debugger;
		}
	});
}

function navigateToCars(){
	var lid = document.querySelector("#locationInput").value;
	setLocationInSession(lid);
}


window.addEventListener("load", function(){
	fetchLocations();
	var btn = document.querySelector("#locationButton");
	btn.addEventListener("click", function(){
		navigateToCars();
	});
});