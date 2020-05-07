var arr = ['蒸饺','馒头','炒饼','面条','鱼蛋','泡面','炒粉','炒饭','饿着','米糕','泡面','面包','肉包','菜包','炒饼'];

var box = document.getElementById("box"),
	start = document.getElementById('start'),
	stop = document.getElementById('stop');
var a = 0,
	time = null;

start.onclick = function(){
	time = setInterval(function(){
		box.innerHTML = arr[a];
		a++;
		if (a>arr.length-1) {
			a = 0;
		}
	},50);
};
//点击停止
stop.onclick = function(){
	clearInterval(time);
};