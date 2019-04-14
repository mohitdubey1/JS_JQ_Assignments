
var change_aling = "";
var set_align = "";
var set_box = "";

$(document).ready(function() {
	$("#click_btn").button();
	$("#open_alert_box").dialog({
		autoOpen: false,  
		close:function(event, ui){
		$("#click_btn").click();
		}
	});			
	$("#top_box,#left_box,#right_box,#bottom_box").mousedown(function(){
		set_box = $(this).attr("id");
		if($(this).attr("id") == "top_box"){
			change_aling = $(this).position().top;
			set_align = $(this).position().left;
		}
		else if($(this).attr("id") == "top_box"){
			change_aling = $(this).position().top;
			set_align = $(this).position().left;	
		}
		else if($(this).attr("id") == "top_box"){
			change_aling = $(this).position().top;
			set_align = $(this).position().left;	
		}
		else{
			change_aling = $(this).position().top;
			set_align = $(this).position().left;					
		}
		$(this).addClass('move');
	});
	$("#click_btn").click(function(){
		console.log("set");
		$("#"+set_box+"").show().animate({left:set_align,top:change_aling});
		$('.move').removeClass('move');
		$("#open_alert_box").dialog('close');
	});
	$(".drop_down").draggable({
		revert: 'invalid'
	});
	$("#set_drop").droppable({
		accept: function(item){
		return true;
		},
		drop: function(event, ui){
			var $this = $(this);
			ui.draggable.position({
				my: "center",at: "center",of: $this,
				using: function(pos) {
					$(this).animate(pos, 200, "linear");
				}
			});
				$("#open_alert_box").dialog("open");
				$(".move").hide();
		}
	});	
});	