$(document).ready(function(){
	
	$(".info-box").click(function(){
		$(".popup").fadeIn(150);
	});
	
	$(".popup").click(function(event){
		var target = $(event.target);
		if (target.attr("class") == "popup") {
			$(".popup").fadeOut(150);
		}
	});
	
});