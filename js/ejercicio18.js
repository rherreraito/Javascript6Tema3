/*
    Autor: Rafael Herrera García
    Archivo: ejercicio18.js
    Descripción: Manipulación de DOM para gestionar eventos y validación de formulario.
*/


function valida(){
    var band=false;
    var error=document.getElementsByClassName("error");
    var nombre=document.getElementById("nombre").value;
    if(nombre.split(" ").length<2)
          error[0].style.visibility="visible";
    else
          error[0].style.visibility='hidden';
    var edad=parseInt(document.getElementById("edad").value);
    if(edad<10 || edad>65)
          error[1].style.visibility="visible";
    else
          error[1].style.visibility='hidden';
    var semestre=parseInt(document.getElementById("semestre").value);
    if(semestre<1 || semestre>13)
          error[2].style.visibility="visible";
    else
          error[2].style.visibility='hidden';
    var ingreso=Date.parse(document.getElementById("ingreso").value);
    if(ingreso>=Date.now())
          error[3].style.visibility="visible";
    else
          error[3].style.visibility='hidden'; 
    return band;
}