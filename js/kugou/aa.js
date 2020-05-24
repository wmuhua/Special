
		function $(id){return document.querySelector(id)}

		var btn = $('#btn'),oDiv = btn.getElementsByTagName('div'),
			uls = $('#uls'),lis = uls.children,date = new Date(),
			ols = $('#ols'),sli = ols.children,bbb = 0;
		
		for(var i = 0;i<oDiv.length;i++){
			oDiv[i].index = i;
			oDiv[i].onclick = function(){
				if(new Date()-date>1000){
					fn(this.index);
					date = new Date();
					for(var j = 0;j<sli.length;j++){
						sli[j].className = '';
					}
					if(this.index == 1){
						bbb++;
						if(bbb>=sli.length){
							bbb = 0;
						}
						sli[bbb].className = 'aaa';
					}else{
						bbb--;
						if(bbb<0){
							bbb = sli.length-1;
						}
						sli[bbb].className = 'aaa';
					}
				}
			}
		}
		function fn(obx){
			var arrW=[],arrH=[],arrL=[],arrT=[],arrZ=[],arrO=[];
			for(var j = 0;j<lis.length;j++){
				arrW[j] = parseInt(getAttr(lis[j],'width'));
				arrH[j] = parseInt(getAttr(lis[j],'height'));
				arrL[j] = parseInt(getAttr(lis[j],'left'));
				arrT[j] = parseInt(getAttr(lis[j],'top'));
				arrZ[j] = parseInt(getAttr(lis[j],'zIndex'));
				arrO[j] = parseFloat(getAttr(lis[j].getElementsByTagName('img')[0],'opacity'));
			}
			for(var i = 0;i<lis.length;i++){
				if(obx == 1){
					var index = i-1;
					if(index<0){
						index = 7;
					}
				}else{
					var index = i+1;
					if(index>lis.length-1){
						index = 0;
					}
				}
				lis[i].style.zIndex = arrZ[index];
				animate(lis[i].getElementsByTagName('img')[0],{
					'opacity':arrO[index]*100
				});
				animate(lis[i],{
					'width':arrW[index],
					'height':arrH[index],
					'left':arrL[index],
					'top':arrT[index]
				});
			}
		}