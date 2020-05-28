
		function fn(x){
			var lis ='';
			var pos ='';
			var tsi ='';
			var wid = parseInt(800/x);
			var z = 0;
			var zid ='';
			for(var i = 0;i<x;i++){
				$('.box ul li span').css('backgroundPosition','');
				$('.box ul li').css('transition','');
				$('.box ul li').css('zIndex','');
				$('.box ul li,.box ul li span').removeAttr('style');
				$('.box ul').children('li').remove();
				if(i>x/2){
					z--;
					zid+='.box ul li:nth-child('+(i+1)+'){z-index:'+z+';}';
				}
				lis+='<li><span></span><span></span><span></span><span></span></li>';
				pos+=".box ul li:nth-child("+(i+1)+") span{background-position: -"+i*wid+"px;}";
				tsi+='.box ul li:nth-child('+(i+1)+'){transition:1s '+0.5/x*i+'s;}';
			}
			$('.box ul').append(lis);
			$('#css').append(pos+tsi+zid);
			$('.box ul li,.box ul li span').css('width',wid+"px");
		};

		fn(1);

		$('.dv button').click(function(){
			var va = $('.dv input').val();
			if(va%2 == 1){
				alert('测试还没好，不要输入奇数，其他随意');
			}else if(!isNaN(va)){
				var le = $('.box ul li').len;
				for(var i=0;i<le;i++){
					if(i>le/2){
						$('.box ul li:nth-child('+(i+1)+')').css('zIndex','');
					}
				}
				$('.box ul li').remove(); //  .removeAttr('style')  .css('display','')
				fn(Math.abs(va));
			}else{
				alert('请输入数字，正负偶数都可以');
			}
		});
			
		$('.btn li').click(function(){
			var a = $(this).index();
			$('.box li').css('transform','translateZ(-180px) rotateX('+a*90+'deg)');
		});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	