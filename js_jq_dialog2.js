$(document).ready(function(){
	$(".close_div,#cancel_btn").click(function(){
		$(".container").hide();
	});
	$("#new_radio").change(function () {
		if ($("#new_radio").attr("checked")) {
			$('#hide').hide();
			$('.show_next_div').show();
			}
    });
	$("#file_radio").change(function () {
        if ($("#file_radio").attr("checked")) {
            $('#hide').show();	
			$('.show_next_div').hide();
            }
	});
	$('#browse_btn').click(function() {
		$('input[type=file]').trigger('click');
	});
	$('#link_chk1').click(function(){
		var chked = $(this);
		if (chked.is(':checked')){
			$('.doc_image img').attr("src", "dialog2_image/value2.gif");
			$('fieldset span').html("Inserts the contents of the file into your document and create a shortcut to the source file. Change to the source file to be reflected in your document.");
		}
		else{
			$('.doc_image img').attr("src","dialog2_image/new_insert.jpg");
			$('fieldset span').html("Inserts the contents of the file into your document so that you can edit it later using the application which created the source file.");
		}
	});
	$('#display_chk2').click(function(){
		var chked = $(this);
		if (chked.is(':checked')){
			$('.doc_image img').attr("src", "dialog2_image/value3.gif");
			$('fieldset span').html("Inserts an icon that represents the contents of the file into your document.");
			$('.diplay_div').show();
		}
		else{
			$('.doc_image img').attr("src","dialog2_image/new_insert.jpg");
			$('fieldset span').html("Inserts the contents of the file into your document so that you can edit it later using the application which created the source file.");
			$('.diplay_div').hide();
		}
	});
	$("#change_btn").click(function(){
		$("#open_dialog").dialog("open");
	});
	$("#open_dialog, #open_dialog2").dialog({
		bgiframe: true,
		autoOpen: false,
		resizable: false,
		width: 380,
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
		width: 410,
	});
});