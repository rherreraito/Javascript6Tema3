/*
    Autor: Rafael Herrera García
    Archivo: ejercicio14.js
    Descripción: Manipulación de DOM para gestionar eventos del raton.
*/

function deplegarEvento(evt) {
    var posx = 0;
    var posy = 0;

    if (evt.pageX || evt.pageY) {
        posx = evt.pageX;
        posy = evt.pageY;
    }else if (evt.screenX || evt.screenY) {
        posx = evt.screenX ;
        posy = evt.screenY ;
    }
    document.getElementById("resultados").value = "X= "+posx + "  Y= " + posy + "\n";
}


var d=document.getElementsByTagName('div')[1];
d.style.height="100px";
d.style.width="100px";
d.style.border="1px black solid";