var menu_open = false;
var content_accessed = false;

$("document").ready(function() {
	$('img').on('dragstart', function(event) {
		event.preventDefault();
	});
	$("#menu_toggle").click(function() {
		if(menu_open) {
			close_menu();
		} else {
			open_menu();
		}
	});
	$("#menu").mouseleave(function() {
		if(content_accessed) {
			console.log("CLOSING");
			close_menu();
			content_accessed = false;
		}
	});
	$("[goto]").click(function(event) {
		event.preventDefault();
		$(".content").removeClass("shown_content");
		$(".content").addClass("hidden_content");
		var goto = $(event.target).attr("goto");
		$("#" + goto).removeClass("hidden_content");
		$("#" + goto).addClass("shown_content");
		content_accessed = true;
	});
});

var close_menu = function() {
	$("#menu").removeClass();
	$("#menu").addClass("closed");
	menu_open = false;
	content_accessed = false;
}

var open_menu = function() {
	$("#menu").removeClass();
	$("#menu").addClass("open");
	menu_open = true;
}