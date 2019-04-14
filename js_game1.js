function rect() {
  var width1 = 500,height1 = 500,border_radi = 100;
     document.getElementById('my_canvas').style.width = 700 + 'px'
	 document.getElementById('my_canvas').style.height = 400 + 'px'
	 document.getElementById('my_canvas').style.borderRadius = 0 + 'px'
}
function circle() {
  var radi = 50,width2 = 400,height2 = 400;
     document.getElementById('my_canvas').style.borderRadius = 50 + '%'
	 document.getElementById('my_canvas').style.width = 500 + 'px'
	 document.getElementById('my_canvas').style.height = 500 + 'px'
}
function squery() {
  var squery_radi = 50,squery_width = 500,squery_height = 500;
      document.getElementById('my_canvas').style.borderRadius = 0 + 'px'
	 document.getElementById('my_canvas').style.width = 500 + 'px'
	 document.getElementById('my_canvas').style.height = 500 + 'px'
}

//Canvas

var canvas = document.getElementById("my_canvas"),
	context = canvas.getContext("2d");
	canvas_horizental = canvas.width / 2.1,
	canvas_vertical = canvas.height / 2.1,
	last_angle=0,
	first_angle=0,
	set_time = null,
	my_rain=null;
function set_rainbow(){
	var rainbow_start_angle = first_angle * Math.PI;
	var rainbow_end_angle = last_angle * Math.PI;
	last_angle = last_angle - 0.01;
	if (last_angle < -1){
		clearInterval(set_time);
	}
	rainbow_animated(130, rainbow_start_angle, rainbow_end_angle, '#831B61');
	rainbow_animated(140, rainbow_start_angle, rainbow_end_angle - 0.15, '#167CB5');
	rainbow_animated(150, rainbow_start_angle, rainbow_end_angle - 0.30, '#1BBB2B');
	rainbow_animated(160, rainbow_start_angle, rainbow_end_angle - 0.45, '#BBA717');
	rainbow_animated(170, rainbow_start_angle, rainbow_end_angle - 0.60, '#BA5F23');
	rainbow_animated(180, rainbow_start_angle, rainbow_end_angle - 0.75, '#BF1415');
	context.clearRect(20, canvas_vertical-4, 100, 150);
}
function rainbow_animated(radiu, rainbow_start_angle, rainbow_end_angle, currentColor){
	context.beginPath();
	context.arc(canvas_horizental, canvas_vertical, radiu, rainbow_start_angle, rainbow_end_angle, true);
	context.lineWidth = 10;
	context.strokeStyle = currentColor;
	context.stroke();
}
function my_rainbow(){
	last_angle=0,first_angle=0;
	clearInterval(set_time);
	context.clearRect(0, 0, 500, 500);
	set_time=setInterval(set_rainbow, 70);
	return false;
}

//History//

var arr=new Array(3);
var result="";
function clickCounter(obj) {
    for(i=0; i<3; i++){
		arr[i]=arr[i+1];
	}
	arr[2]=obj.value;
}
function clickHistory(obj){
 	result="";
	for(j=0; j<3; j++)
	result=result+" \n "+arr[j];
	alert(result);
}

document.getElementById( 'rectangle_btn' ).onclick = function(){
    rect();
	clickCounter(this);
	DetectIphone(this.value);
};
document.getElementById( 'circle_btn' ).onclick = function(){
    circle();
	clickCounter(this);
	DetectIphone(this.value);
};
document.getElementById( 'square_btn' ).onclick = function(){
    squery();
	clickCounter(this);
	DetectIphone(this.value);
};
document.getElementById( 'rainbow_btn' ).onclick = function(){
	my_rainbow();
};

//mobile device
function DetectIphone(clicked_id){
    if(navigator.userAgent.match(/iPad/i)){
		alert(clicked_id);
		}
	if(navigator.userAgent.match(/iPhone/i)){
		alert(clicked_id);
		}
	if(navigator.userAgent.match(/Android/i)){
		alert(clicked_id);
		}
	if(navigator.userAgent.match(/BlackBerry/i)){
		alert(clicked_id);
		}
}

function getsupportedprop(proparray){
    var root=document.documentElement
    for (var i=0; i<proparray.length; i++){
        if (proparray[i] in root.style){
            return proparray[i]
        }
    }
}
 
var boxshadowprop=getsupportedprop(['transition ', 'MozTransition ', 'WebkitTransition'])
document.getElementById("my_canvas").style[boxshadowprop]="all 2.5s ease-in-out"