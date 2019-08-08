$("document").ready(function() {
	check();
	$(window).resize(check);
});

var check = function(){
	var width = $(window).width();
	if(width <= 400) {
		$("html").removeClass();
		$("html").addClass("small");
	}
	if(width > 400 && width < 1000) {
		$("html").removeClass();
		$("html").addClass("medium");
	}
		if(width >= 1000) {
		$("html").removeClass();
		$("html").addClass("large");
	}
}