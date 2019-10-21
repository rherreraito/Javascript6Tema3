/*
    Autor: Rafael Herrera García
    Archivo: ejercicio14.js
    Descripción: Manipulación de DOM para gestionar eventos.
*/

function manejadorEventos() {

    var miForma = document.getElementById("forma");
    var elementos = miForma.childNodes;
    for (var i = 0; i < elementos.length; i++) {
      if ((elementos[i].nodeName == "input") || (elementos[i].nodeName == "INPUT")) {
        elementos[i].onclick = avisa;
      } 
    }
}


function avisa(evt){
    var caja;
  
    if (!evt) {
      evt = event;
      caja = evt.srcElement;
    } else {
      caja = evt.target;
    }
    document.getElementById("resultados").value=caja.name;
}