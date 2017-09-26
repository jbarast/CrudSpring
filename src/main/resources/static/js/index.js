
$(function(){
	$('#bucarPorId').click(function(e){
		e.preventDefault();
		
		buscarUsuarioPorId($('#id').val());
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
		}).done(function(){
			alert("Insertado");
		}).fail(function(jqXHR, textStatus, errorThrown){
			alert("ERROR: " + jqXHR.responseText);
			console.log(jqXHR, textStatus, errorThrown);
		});
	});
	
//	$('#id').change(function(){
//		$.getJSON('/api/usuario/' + $('#id').val(), function(usuario){
//			$('#nick').val(usuario.nick);
//			$('#password').val(usuario.password);
//		});
//	});
});

function buscarUsuarioPorId(id){
	$.getJSON('usuario/' + id, rellenarUsuarioEnPantalla);
}

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