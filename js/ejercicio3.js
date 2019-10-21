/*
    Autor: Rafael Herrera García
    Archivo: ejercicio3.js
    Descripción: Accede a DOM para utilizar InnerHTML.
*/

var imagenes=['hawai.jpg','boston.jpg','paris.jpg']

function cambia(i){
    var p
    switch(i){
       case 0:p=document.getElementById('principal');break;
       case 1:p=document.getElementById('intermedio');break;
       case 2:p=document.getElementById('final');
    }
    p.innerHTML='<img src="../images/'+imagenes[i]+'" height="170" width="250"">';
}