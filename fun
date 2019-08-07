var clicked = "";
var secret_shown = false;
var secret;

var secret_css = "<style>#secret_1 {display: none;position: absolute;background-color: black;width: 100%;height: 100%;top: 0px;}#secret_1 video {margin: auto;height: 100%;}</style>";

var secret_1_html = "<div id=\"secret_1\"><video src=\"Special\\rick.mp4\"></video></div>"

$("document").ready(function() {
	$("#secret_1").hide();
	$("body").on("contextmenu", function(e){
		return false;
	});
	$("body").keydown(function() {
		attempt_stop();
	});
	$("svg path:nth-child(1)").click(function() {
		clicked = clicked + "1";
		check();
	});
	$("svg path:nth-child(2)").click(function() {
		clicked = clicked + "2";
		check();
	});
	$("svg path:nth-child(3)").click(function() {
		clicked = clicked + "3";
		check();
	});
	$("svg path:nth-child(4)").click(function() {
		clicked = clicked + "4";
		check();
	});
	$("svg path:nth-child(5)").click(function() {
		clicked = clicked + "5";
		check();
	});
	$("svg path:nth-child(6)").click(function() {
		clicked = clicked + "6";
		check();
	});
});

var check = function() {
	if(clicked.includes("13326")) {
		clicked = "";
		$("body").append(secret_css);
		$("body").append(secret_1_html);
		secret = $("#secret_1");
		$("#secret_1 video").prop("currentTime", 0);
		$("#secret_1").show(200);
		$("#secret_1 video").prop("volume", 0.5);
		$("#secret_1 video").get(0).play();
		secret_shown = true;
		setTimeout(attempt_stop, 58000)
	}
}

var attempt_stop = function() {
	if(secret_shown) {
		secret.hide(200);
		$("#secret_1 video").get(0).pause();
		secret_shown = false;
	}
}
