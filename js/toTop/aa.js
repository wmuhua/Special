

	function $(id){
		return document.getElementById(id);
	}
  
	function scroll(){
			//ie9+和其他浏览器   默认就是0 所以不能为空
		if(window.pageXOffset != null){
			return {
				left:window.pageXOffset,
				top:window.pageYOffset
			}	//检测浏览器是不是怪异模式 就是没有声明<!doctype html>
		}else if(document.compatMode == 'CSS1Compat'){//声明了doctype的 
			return {					//CSS1Compat 声明了的  BackCompat  未声明的
				left:document.documentElement.scrollLeft,
				top:document.documentElement.scrollTop
			}
		}
		return {//剩下的肯定就是怪异模式的了  如谷歌 默认自己没有声明doctype
			left:document.body.scrollLeft,
			top:document.body.scrollTop
		}
	}


	function aa(c){c.style.display='block';}
	function bb(c){c.style.display='none';}

	var cc = $('ims');
	var leader = 0,target = 0,timer = null;

	window.onscroll = function(){		
		scroll().top>0?aa(cc):bb(cc);
		leader = scroll().top;//起始位置
	}


	cc.onclick = function(){
		target = 0;//目标位置  不写也可以
		timer = setInterval(function(){
			leader = leader+(target-leader)/10;
			window.scrollTo(0,leader);//XY轴
			if(leader == target){
				clearInterval(timer);
			}
		},30);
	}







