$("document").ready(function() {
	check();
	$(window).resize(check);
});

var check = function(){
	var width = $(window).width();
	// $(document).append(width);
	console.log(width)
	if(width <= 640) {
		$("html").removeClass();
		$("html").addClass("small");
	}
	if(width > 640 && width < 1300) {
		$("html").removeClass();
		$("html").addClass("medium");
		$("#name").text("CJ");
	}
	if(width >= 1300) {
		$("html").removeClass();
		$("html").addClass("large");
		$("#name").text("ConsumerJunk");
	}
}