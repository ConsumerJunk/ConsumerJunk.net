$("document").ready(function() {
	$("#search_box").change(function() {

		var names = $("#search_table").find("[search=true]").find("td:nth-child(2)");

		for(x = 0; x < names.length; x++) {
			names[x].parentElement.setAttribute("class", "");
		}

		var search = $("#search_box").val();
		for(x = 0; x < names.length; x++) {
			if(names[x].innerText.includes(search)) {
				var found = x;
				console.log(x);
				var procede = false;
				for(z = 0; z < names.length; z++) {
					if(z != found) {
						if(names[z].innerText.includes(search)) {
							procede = true;
						}
					}
				}
				if(!procede) {
					console.log(names[x].innerText);
					names[x].parentElement.setAttribute("class", "found");
					return;
				}
			}
		}

		for(start = 0; start < search.length + 1; start++) {
			for(end = start + 1; end < search.length + 1; end++) {
				for(x = 0; x < names.length; x++) {
					if(names[x].innerText.includes(search.substring(start, end))) {
						names[x].parentElement.setAttribute("class", "found");
					}
				}
			}
		}
	})
})