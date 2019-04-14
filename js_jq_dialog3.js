$(document).ready(function(){
	$(".close_div,#cancel_btn").click(function(){
		$(".container").hide();
	});
	$("#portrait_radio").change(function () {
		if ($("#portrait_radio").attr("checked")) {
			$('.legend_img img').attr("src", "dialog3_image/portrait.jpg");
			var text1 = $('#width_number').val(); 
			var text2 = $('#height_number').val(); 
			document.getElementById('width_number').value = text2;
			document.getElementById('height_number').value = text1;
		}
    });
	$("#landscape_radio").change(function () {
		if ($("#landscape_radio").attr("checked")) {
			$('.legend_img img').attr("src", "dialog3_image/landscape.jpg");
			$('#hide').show();	
			$('.set_img').hide();
			var text1 = $('#width_number').val(); 
			var text2 = $('#height_number').val(); 
			document.getElementById('width_number').value = text2;
			document.getElementById('height_number').value = text1;
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
    if (x == "1,2"){
        document.getElementById('width_number').value = 25.4;
		document.getElementById('height_number').value = 19.05;
    } 
	else if(x == "3"){
		document.getElementById('width_number').value = 33.831;
		document.getElementById('height_number').value = 25.374;
	}
	else if(x == "4"){
		document.getElementById('width_number').value = 35.56;
		document.getElementById('height_number').value = 26.67;
	}
	else if(x == "5"){
		document.getElementById('width_number').value = 25.517;
		document.getElementById('height_number').value = 19.05;
	}
	else if(x == "6"){
		document.getElementById('width_number').value = 30.074;
		document.getElementById('height_number').value = 22.556;
	}
	else if(x == "7"){
		document.getElementById('width_number').value = 19.914;
		document.getElementById('height_number').value = 14.936;
	}
	else if(x == "8"){
		document.getElementById('width_number').value = 28.575;
		document.getElementById('height_number').value = 19.05;
	}
	else if(x == "9"){
		document.getElementById('width_number').value = 25.4;
		document.getElementById('height_number').value = 19.05;
	}
	else if(x == "10"){
		document.getElementById('width_number').value = 20.32;
		document.getElementById('height_number').value = 2.54;
	}
	else if(x == "11"){
		document.getElementById('width_number').value = 25.4;
		document.getElementById('height_number').value = 14.288;
	}
	else if(x == "12"){
		document.getElementById('width_number').value = 25.4;
		document.getElementById('height_number').value = 15.875;
	}
	else if(x == "13"){
		document.getElementById('width_number').value = 33.867;
		document.getElementById('height_number').value = 19.05;
	}
	else if(x == "14"){
		document.getElementById('width_number').value = 27.94;
		document.getElementById('height_number').value = 21.59;
	}
}
