$(document).ready(function(){
	$(".close_div,#clos_btn").click(function(){
		$(".container").hide();
	});
	$("#new_btn").click(function(){
		$("#new_pop").dialog("open");
	});
	$("#new_pop").dialog({
		bgiframe: true,
		autoOpen: false,
		resizable: false,
		width: 680,
		height: 385,
		show: {
			effect: "fade",
			duration: 500	
			},
		hide: {
				effect: "blind",
				duration: 500
			},
		buttons: {
					OK: function(){
						$(this).dialog("close");
					},
		Cancel: function(){
						$(this).dialog("close");
					}
				}
	});
});