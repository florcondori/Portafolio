'use strict';
const lastScroll = 0;
window.addEventListener('scroll', function(){
	var scrollNumber = window.pageYOffset || document.body.scrollTop;
	console.log(scrollNumber);
		if(scrollNumber>$(window).height()-70){

			$(".navbar").css("background","rgba(0,0,0,0.8)").show(700);
			$(".navbar").css("opacity","0,8");
			console.log("arriba");
		}else{
			$(".navbar").css("background","transparent");
			$(".navbar").css("opacity","1");
		}
});