var uls = document.getElementById('uls'),
	lis = uls.getElementsByTagName('li'),
	ols = document.getElementById('ols'),
	sli = ols.getElementsByTagName('li'),
	dv1 = document.getElementById('dv1'),
	imgs1 = document.getElementById('imgs1'),
	imgs2=  document.getElementById('imgs2'),
	imgs3=  document.getElementById('imgs3'),
	imgs4=  document.getElementById('imgs4'),
	aaa = 1,
	index = 0;

//点击目录右边跳转事件
dv1.onmouseover = function(){
	add();
}
function add(){
	for(var i = 0;i<lis.length;i++){
		lis[i].index = i;
		lis[i].onclick = function(){
			for(var j = 0;j<sli.length;j++){
				sli[j].style.display = "none";
			}
			sli[this.index].style.display = "block";
		}
	}
}

//小狗事件
function fn(value,ss){
	aaa++;
	if(aaa>4){
		aaa = 1;
	}
	ss.src = 'images/'+value+'_'+aaa+'.png';
}
setInterval('fn1(imgs1)',100);
setInterval('fn1(imgs2)',150);
setInterval('fn1(imgs3)',180);
setInterval('fn1(imgs4)',150);
function fn1(ss){
	if(ss.offsetLeft <= 1340 && ss.offsetTop <=18){
		ss.style.left = ss.offsetLeft+10+'px';
		fn('right',ss);
	}
	if(ss.offsetLeft >= 1340 && ss.offsetTop <=718){
		ss.style.top = ss.offsetTop+10+'px';
		fn('bottom',ss);
	}
	if(ss.offsetLeft >= 248 && ss.offsetTop >=718){
		ss.style.left = ss.offsetLeft-10+'px';
		fn('left',ss);
	}
	if(ss.offsetLeft <= 248 && ss.offsetTop >=18){
		ss.style.top = ss.offsetTop-10+'px';
		fn('top',ss);
	}
};


//开始文字过度事件

var hidden1 = document.getElementById('hidden1'),
	hidden2 = document.getElementById('hidden2'),
	hidden3 = document.getElementById('hidden3'),
	daan1 = document.getElementById('daan1'),
	daan2 = document.getElementById('daan2'),
	daan3 = document.getElementById('daan3');
var str = '技 术 随 便 到 哪 里 都 可 以 学 ，而 你 们 却 是 独 一 无 二 的 ，所 以 我 来 了 ，我 爱 你 们 ！';
var str1 = '五 个 月 虽 然 不 长 ，但 它 可 能 改 变 我 们 的 一 生 ，它 也 可 以 当 我 们 没 来 过 一 样  。而 既 然 能 来 的 至 少 都 是 有 想 法 的 人 ，所 以 呢 ，希 望 我 们 都 共 同 努 力 ，共 同 进 步 ，不 忘 初 衷 ！';
var str2="往 后 的 时 光 都 是 崭 新 的 ， 让 我 们 去 寻 找 、去 记 录 、去 体 验 ，愿 我 们 都 能 成 为 自 己 想 成 为 的 人 ，不 抛 弃 ，不 放 弃 。未 知 那 么 多 ，世 界 那 么 大 ，如 此 繁 华 ，岂 能 白 来 一 场 ！";
var i = 0;
var daans = null,
	daans1 = null,
	daans2 = null,
	aaa1 = null,
	aaa2 = null,
	aaa3 = null;
function weiti(e,r){
	e.style.width = e.offsetWidth-3+'px';
	if(e.offsetWidth<300){
		clearInterval(r);
	}
};
function dati(s,q,w){
	s.innerHTML += q.charAt(i);
	i++;
	if(i == q.length){
		clearInterval(w);
		i=0;
	}
}
var nextss = document.getElementById('nextss');
var nextsss = document.getElementById('nextsss');

function qqq(){
	nextss.style.display = 'block';
	nextsss.style.display = 'block';
}

document.onkeydown = function(a){
	switch(a.keyCode){
		case 97:
			aaa1 = setInterval('weiti(hidden1,aaa1)',30);
			break;
		case 98:
			daans = setInterval('dati(daan1,str,daans)',120);			
			break;
		case 100:
			aaa2 = setInterval('weiti(hidden2,aaa2)',30);
			break;
		case 101:
			daans1 = setInterval('dati(daan2,str1,daans1)',120);
			break;
		case 103:
			aaa3 = setInterval('weiti(hidden3,aaa3)',30);
			break;
		case 104:
			daans2 = setInterval('dati(daan3,str2,daans2)',120);
			break;
		case 105:
			qqq();
			break;
	}
}

// var tech2 = document.getElementById('tech2'),
	var tech5 = document.getElementById('tech5'),
		tech8 = document.getElementById('tech8'),
		tech7 = document.getElementById('tech7');

var timer = null,
	timers = null,
	timerss = null;
tech5.onmouseover = function(){
	start(-240);
}
tech5.onmouseout = function(){
	// start(-200,-10);
	start(0);
}

//itarget是目标值  speed是速度
function start(itarget){
	clearInterval(timer);
	var tech2 = document.getElementById('tech2');

	var speed = 0;
	if(tech2.offsetLeft >= itarget){
		speed = -10;
	}else{
		speed = 10;
	}

	//如果要移动速度不是匀速的 是缓冲运动就删除上面的speed的定义和判断判断加上这如下
	//数字越大  速度越来越慢;
	// var speed = (itarget - tech2.offsetLeft)/20;
	// speed = speed>0 ? Math.ceil(speed):Math.floor(speed);

	timer = setInterval(function(){
		if(tech2.offsetLeft == itarget){
			clearInterval(timer);
		}else{
			tech2.style.left = tech2.offsetLeft+speed+'px';
		}

	},30);
}



tech8.onmouseover = function(){
	starts(0);
}
tech8.onmouseout = function(){
	// start(-200,-10);
	starts(100);
}
var alpha = 100;
//itarget是目标值  speed是速度
function starts(itarget){
	clearInterval(timers);
	var tech3 = document.getElementById('tech3');

	timers = setInterval(function(){

		var speed = 0;
		if(alpha > itarget){
			speed = -10;
		}else{
			speed = 10;
		}

		if(alpha == itarget){
			clearInterval(timers);
		}else{
			alpha += speed;
			
			tech3.style.filter = 'alpha(opacity:"+alpha+")';
			tech3.style.opacity = alpha/100;
		}

	},80);
}



tech7.onmouseover = function(){
	startss(240);
}
tech7.onmouseout = function(){
	// start(-200,-10);
	startss(0);
}

//itarget是目标值  speed是速度
function startss(itarget){
	clearInterval(timerss);
	var tech4 = document.getElementById('tech4');

	var speed = 0;
	if(tech4.offsetLeft >= itarget){
		speed = -10;
	}else{
		speed = 10;
	}

	//如果要移动速度不是匀速的 是缓冲运动就删除上面的speed的定义和判断判断加上这如下
	//数字越大  速度越来越慢;
	// var speed = (itarget - tech2.offsetLeft)/20;
	// speed = speed>0 ? Math.ceil(speed):Math.floor(speed);

	timerss = setInterval(function(){
		if(tech4.offsetLeft == itarget){
			clearInterval(timerss);
		}else{
			tech4.style.left = tech4.offsetLeft+speed+'px';
		}

	},30);
}







