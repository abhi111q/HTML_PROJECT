
 // for cards animation

 $(document).ready(function(){
 	

 	$(".card").mouseenter(function(){
 		
 		var linkNode = ($(this.lastElementChild.lastElementChild));
 		cardContentContainer = $(this.lastElementChild);
 		
 		$(cardContentContainer[0].childNodes[3]).animate({
 			opacity : 1,
 			display: "flex"
 		}, 500, "swing");

 		$(linkNode).animate({
 			opacity : 1
 		}, 500, "swing");
 	});

 	$(".card").mouseleave(function(){
 		var linkNode = ($(this.lastElementChild.lastElementChild));
 		
 		var cardContentContainer = $(this.lastElementChild);

 		$(cardContentContainer).addClass()
 	
 		$(cardContentContainer[0].childNodes[3]).animate({
 			opacity : 0,
 			display : "none"
 		}, 500, "swing");

 		$(linkNode).animate({
 			opacity: 0
 		}, 500, "swing");
 	});

 	$("#registerButton").click(function(){
 		$("#modalDiv").load("register.html #container", function(){
 			$("#container").modal();
 		});
 	});


 });