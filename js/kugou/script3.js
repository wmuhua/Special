








	//dom ====>dom节点
	//target ====>目标值
	//attr ====>属性名称
	//fn ====>回调函数

	function animate(dom,obj,fn){	
		
	
		clearInterval(dom.times);

		dom.times = setInterval(function(){	
		
			var bool = true;

		for(var k in obj){
//			alert(k);//放定时器外面测试 弹两下  width 和 height
//			alert(obj[k]);//弹两下  500 和400   //没问题就放定时器里面使用

	

			if(k == 'opacity'){
				var objAttr = parseFloat(getAttr(dom,k))*100;
			}else{
				var objAttr = parseInt(getAttr(dom,k));
			}			
			var speed = (obj[k]-objAttr)/10;

			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

//			if(obj[k] == objAttr){    //由于 宽500 高400 这里的目标值到400就停止定时器了
//									//所以不对  我们先定一个变量 bool = true
//				clearInterval(dom.times);						
//				}

			if(objAttr != obj[k]){//400到400到达了但是400到500还没到
				bool = false;
			}
				

			
				if(k == 'opacity'){
					dom.style.filter = 'alpha(opacity:'+objAttr + speed+')';
					dom.style[k] = (objAttr + speed)/100;		
				}else{
					dom.style[k] = objAttr + speed +'px';	
					
				}
			
			
		}//(for in)

			if(bool){
				clearInterval(dom.times);
				if(fn){
					fn.call(dom);
				}
			}

		},30);
		
		
	}

	function getAttr(dom,attr){//这个函数返回的是字符串

		if(dom.currentStyle){
			return dom.currentStyle[attr];
		}else{
			return getComputedStyle(dom,null)[attr];//(dom,伪类)
		}
	}