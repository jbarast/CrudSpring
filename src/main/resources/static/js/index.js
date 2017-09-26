
$(function(){
	$('#bucarPorId').click(function(e){
		e.preventDefault();
		
		$.ajax({
			type: 'GET',
			url: 'usuario/' + $('#id').val()
		}).done(function(usuario){
			rellenarUsuarioEnPantalla(usuario);
		}).fail(function(jqXHR, textStatus, errorThrown){
			alert("ERROR: " + jqXHR.responseText);
			console.log(jqXHR, textStatus, errorThrown);
		});
	});

	$('#insertar').click(function(e){
		e.preventDefault();
		
		usuario = crearUsuarioDesdePantalla();
		
		$.ajax({
			type: 'POST',
			url: 'usuario',
			data: JSON.stringify(usuario),
			contentType: 'application/json; charset=utf-8',
			dataType: 'json'
		}).done(function(usuario){
			alert("Se ha insertado " + usuario.name);
		}).fail(function(jqXHR, textStatus, errorThrown){
			alert("ERROR: " + jqXHR.responseText);
			console.log(jqXHR, textStatus, errorThrown);
		});
	});
	
	$('#modificar').click(function(e){
		e.preventDefault();
		
		usuario = crearUsuarioDesdePantalla();
		
		$.ajax({
			type: 'PUT',
			url: 'usuario/' + $('#id').val(),
			data: JSON.stringify(usuario),
			contentType: 'application/json; charset=utf-8',
			dataType: 'json'
		}).done(function(usuario){
			alert("Se ha modificado " + usuario.name);
		}).fail(function(jqXHR, textStatus, errorThrown){
			alert("ERROR: " + jqXHR.responseText);
			console.log(jqXHR, textStatus, errorThrown);
		});
	});

	$('#borrar').click(function(e){
		e.preventDefault();
		
		$.ajax({
			type: 'DELETE',
			url: 'usuario/' + $('#id').val()
		}).done(function(){
			alert("Se ha borrado el usuario");
		}).fail(function(jqXHR, textStatus, errorThrown){
			alert("ERROR: " + jqXHR.responseText);
			console.log(jqXHR, textStatus, errorThrown);
		});
	});
	
	$('#buscarTodos').click(function(e){
		e.preventDefault();
		
		$.ajax({
			type: 'GET',
			url: 'usuario'
		}).done(function(datos){
			var usuario = datos._embedded.usuario;
			usuariosATabla(usuario);
		}).fail(function(jqXHR, textStatus, errorThrown){
			alert("ERROR: " + jqXHR.responseText);
			console.log(jqXHR, textStatus, errorThrown);
		});
	});
	
	$('#buscarPorNombre').click(function(e){
		e.preventDefault();
		
		$.ajax({
			type: 'GET',
			url: 'usuario/search/findByName?name=' + $('#name').val()
		}).done(function(datos){
			var usuario = datos._embedded.usuario;
			usuariosATabla(usuario);
		}).fail(function(jqXHR, textStatus, errorThrown){
			alert("ERROR: " + jqXHR.responseText);
			console.log(jqXHR, textStatus, errorThrown);
		});
	});
	
	
	$('#buscarPorPassword').click(function(e){
		e.preventDefault();
		
		$.ajax({
			type: 'GET',
			url: 'usuario/search/findByPassword?password=' +$('#password').val()
		}).done(function(datos){
			var usuario = datos._embedded.usuario;			
			usuariosATabla(usuario);
		}).fail(function(jqXHR,textStatus, errorThrown){
			alert("ERROR: "+jqXHR.responseText);
			console.log(jqXHR, textStatus, errorThrown);
		});
	});
});


function rellenarUsuarioEnPantalla(usuario){
	$('#name').val(usuario.name);
	$('#password').val(usuario.password);
	$('#description').val(usuario.description);
}

function crearUsuarioDesdePantalla(){
	usuario = {};
	
	usuario.name = $('#name').val();
	usuario.password = $('#password').val();
	usuario.description = $('#description').val();
	
	return usuario;
}

function usuariosATabla(usuario) {
	$('table').remove();
	var tabla = $('<table border=1>');
	
	$.each(usuario, function(indice, usuario){
		tabla.append('<tr><td>' + usuario.name + '</td><td>' + usuario.password + '</td><td>'+usuario.description+'</td></tr>');
	});
	
	$(tabla).insertAfter('form');			
}