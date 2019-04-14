$(document).ready(function(){
	$(".close_div,#cancel_btn").click(function(){
		$(".container").hide();
	});
	$("#portrait_radio").change(function () {
		if ($("#portrait_radio").attr("checked")) {
			$('.legend_img img').attr("src", "dialog3_image/portrait.jpg");
			}
    });
	$("#landscape_radio").change(function () {
		if ($("#landscape_radio").attr("checked")) {
			$('.legend_img img').attr("src", "dialog3_image/landscape.jpg");
			}
    });
	$("#portrait_rad").change(function () {
		if ($("#portrait_rad").attr("checked")) {
			$('.page_img img').attr("src", "dialog3_image/portrait.jpg");
			}
    });
	$("#landscape_rad").change(function () {
		if ($("#landscape_rad").attr("checked")) {
			$('.page_img img').attr("src", "dialog3_image/landscape.jpg");
			}
    });
	$("#ok_btn").click(function(){
		$("#open_dialog").dialog("open");
	});
	$("#open_dialog").dialog({
		bgiframe: true,
		autoOpen: false,
		resizable: false,
		width: 540,
		show: {
			effect: "fade",
			duration: 1000	
			},
		hide: {
				effect: "blind",
				duration: 1000
			},
		buttons:{
					OK: function(){
						$(this).dialog("close");
					},
					Cancel: function(){
						$(this).dialog("close");
					}
				}
	});
});
function filtro(a) {
    var x = (a.value || a.options[a.selectedIndex].value);
    if (x == "2"){
        document.getElementById('width_number').value = 2;
    } 
	else if(x == "3"){
		document.getElementById('width_number').value = 3;
	}
	else if(x == "4"){
		document.getElementById('width_number').value = 4;
	}
	else if(x == "5"){
		document.getElementById('width_number').value = 5;
	}
	else if(x == "6"){
		document.getElementById('width_number').value = 6;
	}
	else if(x == "7"){
		document.getElementById('width_number').value = 7;
	}
	else if(x == "8"){
		document.getElementById('width_number').value = 8;
	}
	else if(x == "9"){
		document.getElementById('width_number').value = 9;
	}
	else if(x == "10"){
		document.getElementById('width_number').value = 10;
	}
	else if(x == "11"){
		document.getElementById('width_number').value = 11;
	}
	else if(x == "12"){
		document.getElementById('width_number').value = 12;
	}
	else if(x == "13"){
		document.getElementById('width_number').value = 13;
	}
	else if(x == "14"){
		document.getElementById('width_number').value = 14;
	}
}