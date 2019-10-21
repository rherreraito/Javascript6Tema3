/*
    Autor: Rafael Herrera García
    Archivo: ejercicio16.js
    Descripción: Manipulación de DOM para gestionar eventos.
*/
var a = ["divUno", "divDos", "divTres"];
function cambiaDiv(div, cambio)
{
    document.getElementById(div).style.visibility = cambio;
}

function ocultaTodos()
{
    for (var i=0; i < a.length; i++)
    {
       cambiaDiv(a[i], "hidden");
    }
}
