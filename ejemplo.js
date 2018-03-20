function acceder() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if((user == "admin" && pass == "123456") || (user == "ADMIN" && pass == "123456")){
        document.cookie = "valor = ABC123";
        location.href = "archivo.html";
        }
    else{
        $("#alerta").html("Error, usuario y/o contraseña incorrecto, pruebe de nuevo");
    }
}