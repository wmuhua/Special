function $(id){return document.getElementById(id);}
var box=$('box'),lt=$('lt'),gt=$('gt');
var lis=$('uls').children,sli=$('ols').children;
var aa=0,timer=null;
box.onmouseover = function(){
	clearInterval(timer);
	timer = null;
	for(var i = 0;i<sli.length;i++){
		sli[i].index = i;
		sli[i].onmouseover = function(){
			for(var j = 0;j<sli.length;j++){
				lis[j].style.display = 'none';
				sli[j].className = '';
			}
			lis[this.index].style.display = 'block';
			sli[this.index].className = 'aa';
			aa = this.index;
		}
	}
}
box.onmouseout = function(){
	timer = setInterval(fn,1500);
}
function fn(){
	for(var i = 0;i<lis.length;i++){
		lis[i].style.display = 'none';
		sli[i].className = '';
	}
	if(this.id === 'lt'){
		aa--;
		aa = aa<0?aa=lis.length-1:aa;
	}else{
		aa++;
		aa=aa>lis.length-1?aa=0:aa;
	}
	lis[aa].style.display = 'block';
	sli[aa].className = 'aa';
}
timer =setInterval(fn,1500);
gt.onclick = fn;
lt.onclick = fn;

var cs=$('txt').children,bb=0;
var arr=[
	"第一步：<br>写一个函数fn，遍历图片列表隐藏和小圆点类名为空，定义一个变量，变量对应的图片和小圆点class名切换，写一个定时器，每隔一段时间调用这个函数，就可以实现轮播的效果"
	,'第二步：<br>鼠标移入div的时候停止定时器onmouseover，鼠标移出启动定时器onmouseout'
	,'第三步：<br>左侧按钮添加点击事件函数，点击时切换图片和小圆点至上一个，右侧按钮点击事件直接执行fn'
	,'第四步：<br>遍历小圆点，鼠标移入小圆点onmouseover,遍历图片列表隐藏和小圆点类名为空，当前移入的小圆点给类名和对应的图片显示即可。<br>(闭包传值进去获得当前值是第几个或者为每个小圆点添加自定义属性，获取当前是第几个)'
	,'第五步：<br>把直接显示隐藏效果改为过渡效果，慢慢显示，慢慢隐藏，提示用transition，注意：transition对display:none/block无效'
	,'第六步：<br>恭喜你实现了红线左边全部效果<br>现在开始实现红线右边全部效果'
];
cs[2].innerHTML = arr[0];
cs[0].disabled=true;
cs[0].onclick = function(){
	bb--;
	bb=bb<0?bb=0:bb;
	if(bb==0){this.disabled=true;}
	else{this.disabled=false;cs[1].disabled=false;}
	cs[2].innerHTML = arr[bb];
}
cs[1].onclick = function(){
	bb++;
	bb=bb>arr.length-1?bb=arr.length-1:bb;
	if(bb==arr.length-1){this.disabled=true;}
	else{this.disabled=false;cs[0].disabled=false;}
	cs[2].innerHTML = arr[bb];
}

