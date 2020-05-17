	var sele = document.getElementById('sele');

		function $(id){return document.querySelector(id)}
		var arr = [10,8,6,9];//存放运势分数
		var brr = ['这几天财运都很强,但是危机总在不知不觉中发生了,例如:因为太过乐观而误判情势,导致投...<a href="#">[详细]</a>;','今天的情绪是郁闷的。觉得乱糟糟的。同时今天和领导相处的时候要注意。在今天的日子里，金牛们在...[详细]','今天双子们很容易因为经济担忧，觉得不愉快。同时今天也容易有许多学习的动力，可以开足马力去学...[详细]','从事翻译工作的人今天有机会邂逅异域桃花,新鲜感易让你失去理智,切忌忽视现实问题,工作中容易因冲动而冒犯到同事,但你的坦诚又会让对方很快原谅你,财运不错,跟风投资也会获得盈利机会'];

		sele.onchange = function(){
			$('.icon').style.backgroundPosition = '0 '+(-50*this.value)+'px'; 
			$('.star').style.width = arr[this.value]*8+'px';
			$('.dd_b').innerHTML = brr[this.value];
		}
	