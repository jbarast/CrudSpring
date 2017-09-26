
//buscar por id.
$(function(){	
	$('#buscarPorId').click(function(e){
		e.preventDefault();
		buscarUsuarioPorId($('#id').val());
	
	});	
	
	$('#insertar').click(function(e){
		e.preventDefault();
		usuario = crearUsuarioDesdePantalla();
		$.ajax({
			type : 'POST',
			url: 'usuario',
			data: JSON.stringify(usuario),
			dataType: 'aplication/json'
		});
	});
});  

//Insertar

	
//	$('#id').change(function(){
//		$.getJSON('/api/usuario/' + $('#id').val(), function(usuario){
//			$('#name').val(usuario.name);
//            $('#password').val(usuario.password);
//            $('#description').val(usuario.description);
//		});
//    });

    


//funciones

function buscarUsuarioPorId(id){
	$.getJSON('usuario/'+id,rellenarUsuarioEnPantalla);
}

function rellenarUsuarioEnPantalla(usuario){
	$('#name').val(usuario.name);
	$('#password').val(usuario.password);
	$('#description').val(usuario.description);
	
}

function crearuUsuarioDesdePantalla(){
	usuario={}
	usuario.name = $('#name').val();
	usuario.password = $('#password').val();
	usuario.description = $('#description').val();
	
	return usuario;
}