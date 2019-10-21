/*
    Autor: Rafael Herrera García
    Archivo: ejercicio7.js
    Descripción: Manipulación de DOM para agregar elementos en una lista.
*/

let num=0;
document.getElementById("item").focus();

function enviar(){
    var item=document.getElementById('item'),
        elemento,contenido;
    if(item.value!="" && num<6){
        elemento=document.createElement('li');
        elemento.setAttribute("class","boton0")
        contenido=document.createTextNode(item.value);
        elemento.appendChild(contenido);
        document.getElementsByTagName('ol')[0].appendChild(elemento);
        item.value="";
        num++;
    }else if(num==6){
        item.value="";
        item.disabled=true;
    }
    item.focus();
}

function teclado(e){
    if(e.keyCode==13)
        enviar();
}