var nombre = "Juan";

function saludar() {
    window.alert("Hola " + nombre + " ¿Que tal?");
}

function texto(dato) {
    window.alert(dato);
}

function declarar() {
    var nombre = "María";
    window.alert(nombre.bold()); /* No funciona porque la ventana de microsoft no reconoce el css/html */
}

function escribir() {
    var texto = "En un lugar de la Mancha";
    document.getElementById("mensaje").innerHTML = texto.bold();
}

function numero() {
    var edad = 20;
    window.alert(++ edad);
}

function leer() {
    window.alert(document.getElementById("noticia").innerHTML);
    window.alert(document.getElementById("caja").value);
}