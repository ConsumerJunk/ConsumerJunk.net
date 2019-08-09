var menu_open = false;

$("document").ready(function() {
	$('img').on('dragstart', function(event) {
		event.preventDefault();
	});
	$("#menu_toggle").click(function() {
		menu_open = !menu_open;
		if(menu_open) {
			$("#menu").removeClass();
			$("#menu").addClass("open");
		} else {
			$("#menu").removeClass();
			$("#menu").addClass("closed");		
		}
	});
});