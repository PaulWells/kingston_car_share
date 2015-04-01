function displayAnniversaries(data){
    $('#anniversariesTable').bootstrapTable({
        data: data
    });
}

function fetchAnniversaries(){
	$.ajax({
		url: "../queries/fetchAnniversaries.php",
		type: "POST",
		dataType: 'json',
		success: function(data) {
			if(data.length > 0){
				displayAnniversaries(data);
			}else{
			}
		},
		error: function (error) {
			debugger;
		}
	});
}


window.addEventListener("load", function(){
	fetchAnniversaries();
});