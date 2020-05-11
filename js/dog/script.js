var imgs = document.getElementById("imgs");

var index = 1;
function fn(value) {
	index++;
	if(index>4){
		index = 1;
	}
	imgs.src = "images/"+value+"_"+index+".png";
}
document.onkeydown = function(e){
	var e = window.event || e;
	switch(e.keyCode){
		case 37:
				imgs.style.left = imgs.offsetLeft-10+"px";	
				fn("left");					
				break;
		case 38:
				imgs.style.top = imgs.offsetTop-10+"px";
				fn("top");
				break;
		case 39:
				imgs.style.left = imgs.offsetLeft+10+"px";
				fn("right");
				break;
		case 40:
				imgs.style.top = imgs.offsetTop+10+"px";
				fn("bottom");
				break;
	}

};