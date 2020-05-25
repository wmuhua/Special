		var lis = document.querySelectorAll('#nav li');
		var liName = [];
		for(var item of lis){
			liName.push(item.classList[0]);
		}
//console.log(liName);["tab1", "tab2", "tab3", "tab4", "tab5"]
	
document.querySelector('#nav').addEventListener('click',page)

		function page(){
			var e = window.event;
			var name = e.target.parentNode.classList[0];//获取类名
			switch(name){
				case 'tab5':
					nextPic();
					break;
				case 'tab1':
					perPic();
					break;
			}
		}
	
	
		function nextPic(){
			liName.unshift(liName[lis.length-1]);//第一个复制到最后一个去 
//			console.log(liName[lis.length-1]);// tab4 tab3 tab2 tab1 tab5 tab4
			liName.pop();
//			console.log(liName.pop());//tab4 tab2 tab5
			for(var i=0;i<lis.length;i++){
				lis[i].setAttribute('class',liName[i]);
			}
		}
		function perPic(){
			liName.push(liName[0]);//最后一个放到第一个去
			liName.shift();
			for(var i=0;i<lis.length;i++){
				lis[i].setAttribute('class',liName[i]);
			}
		}
	