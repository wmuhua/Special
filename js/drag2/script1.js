var div2 = document.getElementById("div2"),
	div1 = document.getElementById("div1");

div2.onmousedown = function(e) {

	var e = window.event ||e;
	var x = e.clientX;
	var y = e.clientY;
	var width = div1.offsetWidth;
	var height = div1.offsetHeight;

	document.onmousemove = function(e) {

		var e = window.event || e;
		div1.style.width = width+e.clientX-x+"px";
		div1.style.height = height+e.clientY-y+"px";
	}

}
div2.onmouseup = function(){
	document.onmousemove = null;
}