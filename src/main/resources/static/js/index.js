$(function(){

    $('#id').change(function(){
        $.getJson('/api/usuario/' + $('#id').val(),function(usuario){

            $('#name').val(usuario.name);
            $('#password').val(usuario.password);
            $('#descripcion').val(usuario.description);


        });
    });

});