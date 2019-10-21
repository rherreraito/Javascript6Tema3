/*
    Autor: Rafael Herrera García
    Archivo: ejercicio13.js
    Descripción: Manipulación de DOM para gestionar eventos del teclado.
*/

function deplegarEvento(evt) {
  
    var tipo = evt.tipo;
    var codigo = evt.keyCode;
    var car = String.fromCharCode(codigo);
    var alt = evt.altKey;
    var ctrl = evt.ctrlKey;
    var shift = evt.shiftKey;
  
    var cadena = "Tipo de Evento: " + tipo + "; Codigo de tecla: " + codigo + 
      ", El caracter es:  " + car + "\n ALT ="+alt+"\n CTRL="+ctrl+" \n SHIFT =" + shift + "\n";
  
    if ((codigo >= 65) && (codigo <= 90)) {
      document.getElementById("eventos").value = cadena;
    }
  }

  document.getElementById("entrada").focus();