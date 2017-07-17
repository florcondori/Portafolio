'use strict';
$(_=>{

	const row = $("#portafolio").children().eq(1).children();

	$(".close").on("click", (e)=>{
		/*$(e.target).parents().find("#portafolio").css("height","100vh");*/
		$(e.target).parents().find(".proyecto-descripcion").slideUp(500);		row.children().css("opacity", "1");

	});

	proyectos.forEach( (obj)=>{
		const ancla = $(`<a class='col-xs-12 col-sm-6 col-md-4 proyecto' id='${obj.id}'></a>`);
		const img = $("<img src='assets/img/bg-proyecto.jpg'/>");
		const bgProyecto = $("<div class='bg-proyecto'></div>");
		const title = $(`<p>${obj.title}</p>`);

		ancla.on("click", (e)=>{
			$(".proyecto-descripcion").slideDown(600);
			mostratDetalles(ancla.prop("id"));
			/*$("#portafolio").css("height","150vh");*/
		});


		bgProyecto.append(title);
	/*	ancla.append(img);*/
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
	divDescription.append(`<h3>${proyecto.title}</h3>`);
	divDescription.append(`<p>${proyecto.description}</p>`);
	divDescription.append("<p>Tecnologías utilizadas: </p>");
	divDescription.append(`<p>${use}</p>`);
	divDescription.append(`<a href='${proyecto.url}' target="_blank" class="go-site">Ver Demo</a>`);
	divDescription.append(`<a href='${proyecto.git}' target="_blank" class="go-site">Ver en Github</a>`);
}


const div = $(".skills");

/*div.animate({height: '+=100px', width: '+=100px', top: '+=100px'}, 500);
div.animate({height: '-=100px', width: '-=100px', left: '+=100px'}, 500);
div.animate({height: '+=100px', width: '+=100px', top: '-=100px'}, 500);
div.animate({height: '-=100px', width: '-=100px', left: '-=100px'}, 500);*/






  