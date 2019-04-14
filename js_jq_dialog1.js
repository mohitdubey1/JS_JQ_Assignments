$(document).ready(function(){
	$(".close_div,#cancel_btn").click(function(){
		$(".container").hide();
		});
	$('#display_chk').click(function(){
		var chked = $(this);
		if (chked.is(':checked'))
		{
			$('.diplay_div').show();
			$('.doc_image img').attr("src", "dialog1_image/graph_img.gif");
		}
		else
		{
			$('.diplay_div').hide();
			$('.doc_image img').attr("src", "dialog1_image/new_insert.jpg");
		}
	});
	$("#change_btn").click(function(){
		$("#open_dialog1").dialog("open");
	});
	$("#open_dialog1, #open_dialog2").dialog({
		width: 540,
		bgiframe: true,
		autoOpen: false,
		resizable: false,
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
	$("#ok_btn").click(function(){
		$("#open_dialog2").dialog("open");
	});
	$("#open_dialog2").dialog({
		width: 820,
	});
	$("#file_radio").change(function () {
		if ($("#file_radio").attr("checked")) {
			$('#hide').hide();
			$('.set_img').show();
			$(':checkbox:checked').removeAttr('checked');
			$("#display_chk").attr('disabled', true).css('border-color', '#CDCAC1');
			$(".diplay_div").hide();
			}
    });
	$("#new_radio").change(function () {
        if ($("#new_radio").attr("checked")) {
            $('#hide').show();	
			$('.set_img').hide();
			$("#display_chk").attr('disabled', false).css('border-color', '#1C5180');
            }
	});
});
function filtro(a) {
    var x = (a.value || a.options[a.selectedIndex].value);
    if (x == "1"){
        document.getElementById("insert_text").innerHTML="Inserts a new Adobe Acrobat Document object into your document.";
		$('.show_div img').attr("src", "dialog1_image/adobe_security.gif");
		document.getElementById("doc_text").innerHTML="Adobe Acrobat Document";
    } 
	else if (x == "2"){
        document.getElementById("insert_text").innerHTML="Inserts a new Adobe Acrobat PDFXML Document object into your document.";
		$('.show_div img').attr("src", "dialog1_image/adobe_security.gif");
		document.getElementById("doc_text").innerHTML="Adobe Acrobat PDFXML Document";
    } 
	else if(x == "3"){
		document.getElementById("insert_text").innerHTML="Inserts a new Adobe Acrobat Security Settings Document object into your document.";
		$('.show_div img').attr("src", "dialog1_image/adobe_security.gif");
		document.getElementById("doc_text").innerHTML="Adobe Acrobat Security Settings Document";
	}
	else if(x == "4"){
		document.getElementById("insert_text").innerHTML="Inserts a new Adobe Photoshop Image 13 object into your document.";
		$('.show_div img').attr("src", "dialog1_image/adobe_security.gif");
		document.getElementById("doc_text").innerHTML="Adobe Photoshop Image 13";
	}
	else if(x == "5"){
		document.getElementById("insert_text").innerHTML="Inserts a new Bitmap Image object into your document.";
		$('.show_div img').attr("src", "dialog1_image/bitmap.gif");
		document.getElementById("doc_text").innerHTML="Bitmap Image";
	}
	else if(x == "6"){
		document.getElementById("insert_text").innerHTML="Inserts a new Microsoft Equation 3.0 object into your document.";
		$('.show_div img').attr("src", "dialog1_image/excel.gif");
		document.getElementById("doc_text").innerHTML="Microsoft Equation 3.0";
	}
	else if(x == "7"){
		document.getElementById("insert_text").innerHTML="Inserts a new Microsoft Graph Chart object into your document.";
		$('.show_div img').attr("src", "dialog1_image/graph_chart.gif");
		document.getElementById("doc_text").innerHTML="Microsoft Graph Chart";
	}
	else if(x == "8"){
		document.getElementById("insert_text").innerHTML="Inserts a new Microsoft Excel 97-2003 Worksheet object into your document.";
		$('.show_div img').attr("src", "dialog1_image/equation.gif");
		document.getElementById("doc_text").innerHTML="Microsoft Excel 97-2003 Worksheet";
	}
}