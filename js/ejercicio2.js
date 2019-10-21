/*
    Autor: Rafael Herrera García
    Archivo: ejercicio2.js
    Descripción: Accede a DOM para utilizar InnerHTML.
*/

var imagenes=['hawai.jpg','boston.jpg','paris.jpg']

function cambia(i){
    var p=document.getElementsByTagName('p');
    p[i].innerHTML='<img src="../images/'+imagenes[i]+'" height="170" width="250"">';
}