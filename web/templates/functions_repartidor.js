var currentNombre="";

function cargar_repartidor(){
$.ajax({
            url:'/pedidos',
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){
                    var i = 0;
                    $.each(response, function(){
                      f = '<tr>';
                      f = f + '<td>'+response[i].id+'</td>';
                      f = f + '<td>'+response[i].pedido+'</td>';
                      f = f + '<td>'+response[i].usuario+'</td>';
                      f = f + '<td>'+response[i].direccion+'</td>';
                      f = f + '<td>'+response[i].estado+'</td>';
                      f = f + '</tr>';
                      i = i+1;
                    $('#tablita').append(f);
                  });
            },
            error: function(response){
            }
        });
        }

        function whoami_repart(){
        $.ajax({
            url:'/current',
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){
            cargar_repartidor();
            currentNombre=response['username'];
            $('#logeado1').html(currentNombre);
            },
            error: function(response){
            }
        });
    }
    function cargar_admin(){$.ajax({
            url:'/users',
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){
                    var i = 0;
                    $.each(response, function(){
                      f = '<tr>';
                      f = f + '<td>'+response[i].id+'</td>';
                      f = f + '<td>'+response[i].name+'</td>';
                      f = f + '<td>'+response[i].tipo+'</td>';
                      f = f + '<td>'+response[i].password+'</td>';
                      f = f + '<td>'+response[i].username+'</td>';
                      f = f + '</tr>';
                      i = i+1;
                    $('#tablita3').append(f);
                  });
            },
            error: function(response){
            }
        });
    }

 function whoami_user(){
        $.ajax({
            url:'/current',
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){
            cargar_usuario(response['username']);
            currentNombre=response['username'];
            $('#logeado').html(currentNombre);
            },
            error: function(response){
            }
        });
    }


function cargar_usuario(username){
var k = 0;
$.ajax({
            url:'/pedidos/'+username,
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){

            $.each(response, function(){
                      f = '<tr>';
                      f = f + '<td>'+response[k].id+'</td>';
                      f = f + '<td>'+response[k].pedido+'</td>';
                      f = f + '<td>'+response[k].direccion+'</td>';
                      f = f + '<td>'+response[k].estado+'</td>';
                      f = f + '</tr>';
                      k = k+1;

                    $('#tablilla').append(f);
                  })
            },
        });
}

function enviar(){
var pedido = $('#pedido').val();
var direccion = $('#direccion').val();
var mensaje = JSON.stringify({
    "pedido" : pedido,
    "usuario" : currentNombre,
    "direccion" : direccion
});
$.ajax({
    url: '/createPedido',
    type: 'POST',
    contentType: 'application/json',
    data: mensaje,
    dataType: 'json',
    success: function(response){
   },
    error:function(response){
    }
    });
}

function aceptar(){

    var id_pedido = $('#idpedido').val();
    $.ajax({
    url: '/pedidos/id/'+id_pedido,
    type: 'DELETE',
    contentType: 'application/json',
    success: function(){
    alert("Hola");
   },
    error:function(){
    alert("Hola");
    }
    });
}

function recogerPedido(id){
 $.ajax({
    url: '/pedidos/get/'+id_pedido,
    type: 'GET',
    contentType: 'application/json',
    success: function(response){
    alert(response);
   },
    error:function(response){
    alert(response);
    }
    });
}



function createPedido2(response){
$.ajax({
    url: '/createPedido2',
    type: 'POST',
    contentType: 'application/json',
    data: response,
    dataType: 'json',
    success: function(response){
    alert("HOls")
   },
    error:function(response){
    }
    });
}