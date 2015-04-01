function displayComments(data){
	$('#commentsTable').bootstrapTable('destroy');
    $('#commentsTable').bootstrapTable({
        data: data
    });
}

function fetchComments(orderVal){
	var input = {order: orderVal};
	$.ajax({
		url: "../queries/fetchComments.php",
		type: "POST",
		data: input,
		dataType: 'json',
		success: function(data) {
			if(data.length > 0){
				displayComments(data);
			}else{

			}
		},
		error: function (error) {
			debugger;
		}
	});
}

function respondToComment(){
	var cidVal = document.querySelector("#cidInput").value;
	var textVal = document.querySelector("#responseTextArea").value;

	var input = {cid: cidVal, text: textVal};
	$.ajax({
		url: "../queries/respondToComment.php",
		type: "POST",
		data: input,
		dataType: 'json',
		success: function(data) {
			if(data === true){
				document.querySelector("#cidInput").value = "";
				document.querySelector("#responseTextArea").value = "";
			}else{

			}
		},
		error: function (error) {
			debugger;
		}
	});
}

window.addEventListener("load", function(){
	fetchComments("DESC");
	var btn = document.querySelector("#respondButton");
	var ascBtn = document.querySelector("#ascButton");
	var descBtn = document.querySelector("#descButton");
	btn.addEventListener("click", function(){
		respondToComment();
	});

	ascBtn.addEventListener("click", function(){
		fetchComments("ASC");
	})
	descBtn.addEventListener("click", function(){
		fetchComments("DESC");
	})
});