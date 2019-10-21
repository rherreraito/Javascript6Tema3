/*
    Autor: Rafael Herrera García
    Archivo: ejercicio5.js
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
    img=document.images,
    grados=[15,15,15,15,15,15,15,15,15,15,15,15];


function transforma(i){
    img[i].style.transform='rotate('+grados[i]+'deg)';
    img[i].src="../images/"+imagenes[Math.floor(Math.random()*100)%12];
    grados[i]=grados[i]==360?15:grados[i]+15;
}

function llenar(){
    var i;
    for(i=0;i<img.length;i++)
        img[i].src="../images/"+imagenes[i];
}

llenar();