function whoami_user(){
alert("Hola");
        $.ajax({
            url:'/current',
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){
            alert(response['username']);
            cargar_usuario(response['username']);
            },
            error: function(response){
            }
        });
    }


function cargar_usuario(username){
$.ajax({
            url:'/pedidos/jpmiraval',
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){
            $.each(response, function(){
                       alert("GA");
                      f = '<tr>';
                      f = f + '<td>'+response[i].id+'</td>';
                      f = f + '<td>'+response[i].pedido+'</td>';
                      f = f + '<td>'+response[i].estado+'</td>';
                      f = f + '</tr>';
                      i = i+1;
                    $('#tabla_pedido_usuario').append(f);
                  })
            },
        });
}