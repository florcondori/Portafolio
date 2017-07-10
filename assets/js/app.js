'use strict';
$(_=>{
	$(".proyecto").on("click", (e)=>{
		console.log(e);
		$(e.currentTarget).addClass("active");
		$(".proyecto-social").slideDown(500);
	});

	$(".close").on("click", (e)=>{
		$(".proyecto-social").slideUp(500);
	});;
});
