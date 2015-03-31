window.addEventListener("load", function(){

	var login_btn = document.querySelector("#login-btn");
	var register_btn = document.querySelector("#register-btn");

	login_btn.addEventListener("click", function(){
		document.location.href = "html/login.html";
	});

	register_btn.addEventListener("click", function(){
		document.location.href = "html/register.html";
	})
});