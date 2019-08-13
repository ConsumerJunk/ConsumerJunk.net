var menu_open = false;
var click_out = false;

$(document).ready(function(event) {
	$(document).mousedown(function(event) {
		if(menu_open && click_out && !($("#menu_toggle").is(event.target))) {
			if(!($(event.target).parents('#menu').length || $("#menu").is(event.target))) {
				close_menu();
			}
		}
	});
	$('img').on('dragstart', function(event) {
		event.preventDefault();
	});
	$("#menu_toggle").unbind("mousedown").mousedown(function(event) {
		event.stopImmediatePropagation();
		event.preventDefault();
		if(menu_open) {
			menu_open = false;
			close_menu();
		} else {
			menu_open = true;
			open_menu();
		}
	});
	$("[goto]").click(function(event) {
		close_menu();
		event.preventDefault();
		$(".content").removeClass("shown_content");
		$(".content").addClass("hidden_content");
		var goto = $(event.target).attr("goto");
		$("#" + goto).removeClass("hidden_content");
		$("#" + goto).addClass("shown_content");
	});
});

var close_menu = function() {
	click_out = false;
	$("#menu").removeClass();
	$("#menu").addClass("closed");
	menu_open = false;
}

var open_menu = function() {
	$("#menu").removeClass();
	$("#menu").addClass("open");
	menu_open = true;
	setTimeout(function() {
		click_out = true;
	}, 0);
}