$(document).ready(function(){

	$("#registerForm").submit(function(e){
		e.preventDefault();

		var name = $("#name").val();
		var email = $("#email").val();
		var password = $("#pswrd").val();
		var confirmPassword = $("#cpswrd").val();

		var pass = true;

		console.log(name + email + password + confirmPassword);

		$(".error").removeClass("error");
		$('.errorText').remove();

		if(name.length < 1){
			$("#name").addClass("error");
			$("#name").after(
					'<span class="errorText">Enter name.</span>'
				);

			pass = false;
		}

		if(email.length < 1){
			$("#email").addClass("error");
			$("#email").after(
					'<span class="errorText">Enter valid email.</span>'
				);
			pass = false;
		}
		// else{
		// 	var reg = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;

		// 	if(!reg.test(email)){
		// 		$("#email").toggleClass("error");
		// 		$("#email").after(
		// 			'<span class="errorText">Enter valid email.</span>'
		// 		);
		// 		pass = false;
		// 	}

		// }

		if(password.length < 8){
			$("#pswrd").addClass("error");
			$("#pswrd").after(
					'<span class="errorText">Password should be atleast 8 characters long.</span>'
				);

			pass = false;
		}else if(password != confirmPassword){
			$("#cpswrd").after(
					'<span class="errorText">Passwords do not match.</span>'
				);

			pass = false;
		}

		if(pass == true){

			window.location.href = "./main.html";
		}
	});
});

document.addEventListener("DOMContentLoaded", function(event){
	window.addEventListener("load", function(e){

		document.body.style.display = "block";

		var tl = new TimelineMax();

		tl.staggerFrom(".left-side", 1, {
			opacity: 0,
			x: -40,
			ease: Power2.easeInOut
		}, 0.2);

		tl.staggerFrom(".right-side", 1, {
			opacity: 0,
			x: 40,
			ease: Power2.easeInOut
		}, 0.2, "-=1");

		tl.staggerFrom(".heading", 0.5, {
			opacity: 0,
			x: -20,
			ease: Power2.easeInOut
		}, 0.2, "-=0.5");

		tl.staggerFrom(".text", 0.5, {
			opacity: 0,
			x: -20,
			ease: Power2.easeInOut
		}, 0.2, "-=0.5");

	}, false);
});