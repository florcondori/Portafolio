'use strict';
$(_=>{

	$(".close").on("click", (e)=>{
		$(".proyecto-social").slideUp(500);
		console.log($(".proyecto").find("div.active"));

	});

	const container = $("#portafolio").children().eq(1).children();
	console.log(proyectos);
	proyectos.forEach( (obj)=>{
		const ancla = $(`<a class='col-xs-12 col-sm-6 col-md-4 proyecto' id='${obj.id}'></a>`);
		const img = $(`<img src='assets/img/${obj.img}' alt='${obj.title}'>`);
		const bgProyecto = $("<div class='bg-proyecto'></div>");
		const title = $(`<p>${obj.title}</p>`);
		bgProyecto.hide();

		ancla.on("click", (e)=>{
			$(".proyecto-social").slideDown(600);
			bgProyecto.show(300);
			ancla.addClass("active");
			console.log(ancla.prop("id"));
			mostratDetalles(ancla.prop("id"));
		});


		bgProyecto.append(title);
		ancla.append(img);
		ancla.append(bgProyecto);

		container.append(ancla);
	});
});

const mostratDetalles = (id)=>{
	const proyecto = proyectos.filter((obj)=>{
		return obj.id == id;
	})[0];
	const reque = proyecto.requerimiento.join("</br>");
	const use = proyecto.use.join(",");
	const img = $(".proyecto-social").children().eq(1).children();
	const divDescription = $(".proyecto-social").children().eq(2);
	divDescription.empty();

	img.prop("src","assets/img/"+proyecto.img);
	divDescription.append(`<h3>${proyecto.title}</h3>`);
	divDescription.append(`<p>${proyecto.description}</p>`);
	divDescription.append(`<p>${reque}</p>`);
	divDescription.append(`<p>${use}</p>`);
	divDescription.append(`<a href='${proyecto.url}' target="_blank" class="go-site">Sitio Web</a>`);
}
