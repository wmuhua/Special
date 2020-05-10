//鼠标按下事件  鼠标移动事件   鼠标释放事件

var box = document.getElementById("box");

box.onmousedown = function(e) {
	var e = window.event || e;
	var x = e.clientX-box.offsetLeft;
	var y = e.clientY-box.offsetTop

	document.onmousemove = function(e){

		var e = window.event || e;
		box.style.left = e.clientX-x+"px";
		box.style.top = e.clientY-y+"px";
	}

}

//dom零级事件的删除
box.onmouseup = function() {
	document.onmousemove = null;
}