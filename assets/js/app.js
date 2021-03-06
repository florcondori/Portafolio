'use strict';
$(_=>{
	
	const row = $("#portafolio").children().eq(1).children();

	$(".close").on("click", (e)=>{
		$(e.target).parents().find(".proyecto-descripcion").slideUp(500);

	});

	proyectos.forEach( (obj)=>{
		const ancla = $(`<a class='col-xs-12 col-sm-6 col-md-4 proyecto' id='${obj.id}' href='#portafolio'></a>`);
		const imgNegro = $(`<img src='assets/img/${obj.logoNegro}' class='logo'/>`);
		const img = $(`<img src='assets/img/${obj.logo}' class='img-oculto'/>`);
		const bgProyecto = $("<div class='bg-proyecto'></div>");
		const title = $(`<p>${obj.title}</p>`);
	
		ancla.on("click", (e)=>{
			$(".proyecto-descripcion").slideDown(600);
			mostratDetalles(ancla.prop("id"));
		});

		bgProyecto.append(imgNegro);
		bgProyecto.append(img);
		ancla.append(bgProyecto);

		row.append(ancla);
	});

});

const mostratDetalles = (id)=>{
	const proyecto = proyectos.filter((obj)=>{
		return obj.id == id;
	})[0];

	const use = proyecto.use.join(", ");
	const img = $(".proyecto-descripcion").children().eq(1).children();
	const divDescription = $(".proyecto-descripcion").children().eq(2);
	divDescription.empty();

	img.prop("src","assets/img/"+proyecto.img);
	divDescription.append(`<h3>${proyecto.title}:</h3>`);
	divDescription.append(`<p>${proyecto.description}</p>`);
	divDescription.append("<h4 class='mb-0'>Funcionalidad del Demo:</h4>");
	divDescription.append(`<p>${proyecto.demo}</p>`);
	divDescription.append("<h4 class='mb-0'>Tecnologías utilizadas: </h4>");
	divDescription.append(`<p>${use}</p>`);
	const divGoSite = $("<div class='div-go-site'></div>");
	divGoSite.append(`<a href='${proyecto.url}' target="_blank" class="go-site text-uppercase">Ver Demo</a>`);
	divGoSite.append(`<a href='${proyecto.git}' target="_blank" class="go-site text-uppercase">Ver en Github</a>`);
	divDescription.append(divGoSite);
}


/*div.animate({height: '+=100px', width: '+=100px', top: '+=100px'}, 500);
div.animate({height: '-=100px', width: '-=100px', left: '+=100px'}, 500);
div.animate({height: '+=100px', width: '+=100px', top: '-=100px'}, 500);
div.animate({height: '-=100px', width: '-=100px', left: '-=100px'}, 500);*/






  