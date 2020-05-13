
		function $(id){return document.getElementById(id);}

		var a = $('box').offsetHeight/$('txt').offsetHeight*$('box').offsetHeight;
		$('small').style.height = a + 'px';

		fn($('small'),$('txt'));//滚动条  文本盒子 

		function fn(obj,target){			
			obj.onmousedown = function(e){
				var e = window.event || event,
					y = e.clientY - this.offsetTop,
					that = this;
				document.onmousemove = function(e){
					var e = window.event || event;
					var aa = e.clientY - y,
						bb = $('box').offsetHeight-that.offsetHeight,
						cc = (target.offsetHeight-$('box').offsetHeight)/($('box').offsetHeight-that.offsetHeight)*aa;//aa是滚动条的offsetTop  也表示滚动条移动的距离
					if(aa<0){
						aa = 0;
					}else if(aa>bb){
						aa = bb;
					}else{
						target.style.top = -cc +'px';				
					}
					that.style.top = aa+ 'px';
					window.getSelection ? (window.getSelection().removeAllRanges()):(document.selection.empty());
				}
			}
			document.onmouseup = function(){
				document.onmousemove = null;
			}		
		}




			
//详细的在下面 

















		
//		function fn(obj,target){
//		
//			obj.onmousedown = function(e){
//
//				var e = window.event || event,
//					y = e.clientY - this.offsetTop,
//					that = this;
//
//				document.onmousemove = function(e){
//
//					var e = window.event || event;
//
//					//可以这样
////					that.style.top = e.clientY - y + 'px';
////					var aa = parseInt(that.style.top);
////					if(aa<0){
////						that.style.top = 0;
////					}
//
//
//					//也可以这样
//					var aa = e.clientY - y,//滚动条移动的距离
//						bb = $('box').offsetHeight-that.offsetHeight,
//						cc = (target.offsetHeight-$('box').offsetHeight)/($('box').offsetHeight-that.offsetHeight)*aa;
//
//					if(aa<0){
//						aa = 0;
//					}else if(aa>bb){
//						aa = bb;
//					}else{
//					
////有两个公式可以得到：当滚动条移动1像素时  文本移动多少像素

////1:(内容高度-显示内容的盒子的高度) / (显示内容的盒子的高度- 滚动条的高度) * 滚动条移动的数值
////2:(内容高度-显示内容的盒子的高度) * 滚动条移动的数值 / (显示内容的盒子的高度 - 滚动条的高度)
//
//						target.style.top = -cc +'px';
//					
//					}
//
//					that.style.top = aa+ 'px';
//
//					window.getSelection ? (window.getSelection().removeAllRanges()):(document.selection.empty());
//				}
//			}
//			document.onmouseup = function(){
//				document.onmousemove = null;
//			}
//		
//		
//		}
