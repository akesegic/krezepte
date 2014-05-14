$(document).ready(function(){
	
	//Show popup
	$(".info-box").click(function(event){
		event.preventDefault();
		var scrolltop = $(window).scrollTop(),
		    width = $(window).width();
		
		if (width < 560) {
			$(".popup-border").css("top",scrolltop+30);
		}else{
			$(".popup-border").css("top",scrolltop+90);
		}
		
		$(".js-popup1").fadeIn(150);
	});
	
	//Hide popup
	$(".popup").click(function(event){
		var target = $(event.target);
		
		if (target.hasClass("popup")) {
			$(".popup").fadeOut(150);
		}
	});
	
	//Switch to second popup
	$(".js-trigger-pin").click(function(event){
		event.preventDefault();
		
		$(".js-popup1").fadeOut(150);
		$(".js-popup2").fadeIn(150);
	});
	
});