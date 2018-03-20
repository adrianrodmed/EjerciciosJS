function validar() {
    var hoy = Date.now();
    var x = document.getElementById("pass").value;
    var y = document.getElementById("fecha").value;
    var z = document.getElementById("mail").value;

    if(x.length < 6){
        $("#mensaje").html("La contraseña tiene que tener 6 dígitos mínimo");
        return false;
    }
    if(y < hoy){
        $("#mensaje").html("La fecha tiene que ser la de hoy o en adelante");
        return false;
    }
    if((x == null || x == "") || (y == null || y == "") || (z == null || z == "")){
        $("#mensaje").html("Rellena los campos");
        return false;
    }
    else{
        $("#mensaje").html("Correcto");
    }
}