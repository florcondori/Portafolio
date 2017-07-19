'use strict';
const lastScroll = 0;
window.addEventListener('scroll', function(){
	var scrollNumber = window.pageYOffset || document.body.scrollTop;
	console.log(scrollNumber);
		if(scrollNumber>lastScroll){
			document.getElementById("nav-header").classList.remove("header-in");
			document.getElementById("nav-header").style.opacity = 0;
			console.log("arriba");
		}else{
			document.getElementById("nav-header").classList.add("header-in");
			document.getElementById("nav-header").style.opacity = 1;
			console.log("abajo");
			if(scrollNumber<=3){
				document.getElementById("nav-header").classList.remove("header-in");
				document.getElementById("nav-header").style.opacity = 1;
			}
		}
});