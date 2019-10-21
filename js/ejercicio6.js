/*
    Autor: Rafael Herrera García
    Archivo: ejercicio6.js
    Descripción: Manipulación de DOM para modificar atributos.
*/

let imagenes=["amarillo.jpg",
             "azul.jpg",
             "cafe.jpg",
             "cielo.jpg",
             "dorado.jpg",
             "gris.jpg",
             "morado.jpg",
             "negro.jpg",
             "rojo.jpg",
             "rosa.jpg",
             "rose.jpg",
             "verde.jpg"],
    span=document.getElementsByClassName("imagen"),
    grados=[15,15,15,15,15,15,15,15,15,15,15,15];


function transforma(i){
    var img=span[i].childNodes[0];
    img.style.transform='rotate('+grados[i]+'deg)';
    img.src="../images/"+imagenes[Math.floor(Math.random()*100)%12];
    grados[i]=grados[i]==360?15:grados[i]+15;
}

function llenar(){
    var i;
    for(i=0;i<span.length;i++)
        span[i].childNodes[0].src="../images/"+imagenes[i];
}

llenar();