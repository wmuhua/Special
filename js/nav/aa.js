var cloud = document.getElementById("cloud"),
			nav = document.getElementById('nav'),
			lis = nav.children[1].children,
			ols = document.getElementById('ols'),
			sli = ols.children;

		//缓动公式
		var leader = 0,target = 0;
		setInterval(function(){
			leader = leader+(target-leader) / 10;
			cloud.style.left = leader +'px';
		},10)

		var current = 0;//用于存放点击时候的offsetLeft

		for(var i = 0;i<lis.length;i++){
			lis[i].index = i;
			lis[i].onmouseover = function(){
				target = this.offsetLeft;
			}
			lis[i].onmouseout = function(){
				// target = 0;				//鼠标移开 target回到刚才点击的位置
				target = current;
			}
			lis[i].onclick = function(){
				// target = this.offsetLeft;
				current = this.offsetLeft;//点击的时候把当前位置存储一下
				for(var j=0;j<sli.length;j++){
					sli[j].style.display = 'none';
				}
				sli[this.index].style.display = 'block';
			}
		}