$(function(){
	$('#id').change(function(){
		$.getJSON('/api/usuario/' + $('#id').val(), function(usuario){
			$('#name').val(usuario.name);
            $('#password').val(usuario.password);
            $('#description').val(usuario.description);
		});
    });
});  
    