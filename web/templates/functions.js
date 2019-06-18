function register(){
    var username = $('#register_user').val();
    var name = $('#register_name').val();
    var password = $('#register_password').val();
    var type = $('#categoria').val();
    var message = JSON.stringify({
                    "username": username,
                    "name": name,
                    "password": password,
                    "type": type
                });
    $.ajax({
                     url:'http://127.0.0.1:8080/users',
                     type:'POST',
                     contentType: 'application/json',
                     data : message,
                     dataType:'json'
                   });
}

				function redirigir(tipo){

							}

    function getData(){
        var username = $('#username').val();
        var password = $('#password').val();
        $('#action').html("Authenticating...");
        var message = JSON.stringify({
           "username" : username,
           "password" : password
           });

    $.ajax({
        url:'/authenticate',
        type: 'POST',
        contentType: 'application/json',
        data: message,
        dataType: 'json',
        success: function(response){
            whoami();
            },
        error: function(response){
            whoami();
            }
        });
    }

    function whoami(){
        $.ajax({
            url:'/current',
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){

                if(response['tipo']=="Cliente"){
                 document.location.href="index(1).html";
                }
                 if(response['tipo']=="Repartidor"){
                 document.location.href="index(2).html";
                }
                 if(response['tipo']=="Administrador"){
                 document.location.href="index(3).html";
                }

            },
            error: function(response){
            }
        });
    }

