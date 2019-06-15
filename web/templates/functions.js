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
    alert(message);
    $.ajax({
                     url:'http://127.0.0.1:8080/users',
                     type:'POST',
                     contentType: 'application/json',
                     data : message,
                     dataType:'json'
                   });
}