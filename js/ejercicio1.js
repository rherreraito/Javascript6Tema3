/*
    Autor: Rafael Herrera García
    Archivo: ejercicio1.js
    Descripción: Accede a DOM para modificar el fondo de todo el documento.
*/
let colorR=1,colorG=1,colorB=1;

function inicio(){
    setInterval(cambiaColor,5); // Temporizador cada medio segundo aprox.
}

function cambiaColor(){
    var miColor=Number(colorR).toString(16);
    miColor+=Number(colorG).toString(16);
    miColor+=Number(colorB).toString(16);
    document.body.style.background="#"+miColor;
    if(colorB==256){
         colorB=1;
         if (colorG==256){
             colorG=1;
             if(colorR==256)
                colorR=1;
             else
                colorR++;
         }else
            colorG++;
    }else
       colorB++;
}

inicio();