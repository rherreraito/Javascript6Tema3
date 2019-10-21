/*
    Autor: Rafael Herrera García
    Archivo: ejercicio4.js
    Descripción: Manipulación de DOM para mover componentes.
*/

let valores=[87,54,73,23,43,90,43,56],
    lista=document.getElementsByTagName("li"); 

function clasifica(){
    var i,j;
    for(i=0;i<valores.length-1;i++){
        for(j=i+1;j<valores.length;j++){
             if(valores[j]<valores[i]){
                 tmp=valores[j];
                 valores[j]=valores[i];
                 valores[i]=tmp;
                 lista[j].innerText=valores[j];
                 lista[i].innerText=valores[i];
             }
        }
    }
}

function llenar(){
    var i;
    for(i=0;i<lista.length;i++)
        lista[i].innerText=valores[i];
}

llenar();