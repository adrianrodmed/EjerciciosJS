$(document).ready(function(){
    $("#mostrar").on( "click", function() {
        $('#target').show();
     });
    $("#ocultar").on( "click", function() {
        $('#target').hide(); //oculto mediante id
    });
});