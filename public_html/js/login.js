function navigateToHomePage() {
	document.location.href = "homePage.html";
}

function navigateToAdminHomePage() {
	document.location.href = "adminHomePage.html";
}

function adminLogin(input){
	$.ajax({
		url: "../queries/adminLogin.php",
		type: "POST",
		data: input,
		dataType: 'json',
		success: function(data) {
			alert("success admin log in");
			if(data.length >0){
				// Successful admin login
				navigateToAdminHomePage();
			}else{
				//Failed Log in
			}
		},
		error: function (error) {
			debugger;
		}
	});
}

function login() {

	var user = document.querySelector("#username-input").value;
	var pass = document.querySelector("#password-input").value;
	var input = {username: user, password: pass};

	$.ajax({
		url: "../queries/login.php",
		type: "POST",
		data: input,
		dataType: 'json',
		success: function(data) {
			if(data.length > 0){
				// Successful login
				navigateToHomePage();
			}else{
				// Check if credentials belong to admin
				alert("Try Admin Log In");
				adminLogin(input);
			}

		},
		error: function (error) {
			debugger;
		}
	});
	return false;
}

window.addEventListener("load",function(){

	var login_btn = document.querySelector("#login-btn");

	login_btn.addEventListener("click", function(){
		login();
	});

});
