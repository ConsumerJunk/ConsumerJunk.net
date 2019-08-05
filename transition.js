$(document).ready(function() {
	pageIn();
	$("[to-link]").click(function (event) {
		pageOut($(this));
	});
});

function pageIn() {
	$("#content").hide();
	$("#content").show(200);
}

function pageOut(element) {
	var link = element.attr("to-link");
	$("#content").hide(200, function() {
		window.location.href = link;
	})
}