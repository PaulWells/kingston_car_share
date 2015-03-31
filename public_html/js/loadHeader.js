$(function(){
	$("#header").load("header.html");
	$("#header").on("click", function(e){
		var headerContainer = $("#header");
		var headerTitle = $(".header-title")[0];
		var headerLogOut = $("#header-logout-btn")[0];
		if( e.target.isSameNode(headerTitle)){
			document.location.href = "homePage.html";
		}else if (e.target.isSameNode(headerLogOut)){
			document.location.href = "../index.html";
		}
	});
});