	function $(id){return document.getElementById(id);}
		$('a2').onmouseover = function(){
			$('a3').style.display = 'block';
			$('a4').style.display = 'block';
		}
		$('a2').onmouseout = function(){
			$('a3').style.display = 'none';
			$('a4').style.display = 'none';		
		}
		$('a2').onmousemove = function(e){
			var e = window.event || event;
			var sl = document.body.scrollLeft || document.documentElement.scrollLeft,
				st = document.body.scrollTop || document.documentElement.scrollTop;
			var x = e.clientX-$('a1').offsetLeft+sl-$('a3').offsetWidth/2,//x轴在小图上的位置
				y = e.clientY-$('a1').offsetTop+st-$('a3').offsetHeight/2,//y轴在小图上的位置
				a = $('a2').offsetWidth-$('a3').offsetWidth,//最小值
				b = $('a2').offsetHeight-$('a3').offsetHeight,//最大值
				c = $('a4').offsetWidth/$('a2').offsetWidth;//小图上移动时，大图移动的倍数
			x = x<0?0:x>a?a:x;
			y = y<0?0:y>b?b:y;
			//小方块移动
			$('a3').style.left = x + 'px';
			$('a3').style.top = y + 'px';			
			//大图移动  距离乘以倍数
			$('a5').style.left = -x * c + 'px'; 
			$('a5').style.top =  -y * c + 'px';		
		}






































//			if(x<0){
//				x = 0;
//			}else if(x>a){
//				x = a;
//			}
//			if(y<0){
//				y = 0;
//			}else if(y>b){
//				y = b;
//			}