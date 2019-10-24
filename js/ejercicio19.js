/*
    Autor: Rafael Herrera García
    Archivo: ejercicio19.js
    Descripción: Manipulación de DOM para gestionar eventos y validación de formulario.
*/

(function(){

    var formulario=document.forms[0];
    var error=document.getElementsByClassName("error");

    function validaNombre(e){
        var nombre=formulario.nombre.value;
        if(nombre.split(" ").length<2){
           error[0].style.visibility="visible";
           e.preventDefault();
        }
        else
            error[0].style.visibility='hidden';
    }

    function validaEdad(e){
          var edad=parseInt(formulario.edad.value);
          if(edad<10 || edad>65){
                error[1].style.visibility="visible";
                e.preventDefault();
          }else
               error[1].style.visibility="hidden";
    }
    function validaSemestre(e){
      var semestre=parseInt(formulario.semestre.value);
      if(semestre<1 || semestre>13){
            error[2].style.visibility="visible";
            e.preventDefault();
      }else
           error[2].style.visibility="hidden";
    }

    function validaIngreso(e){
      var ingreso=Date.parse(document.getElementById("ingreso").value);
      if(ingreso>=Date.now()){
            error[3].style.visibility="visible";
            e.preventDefault();
      }
      else
            error[3].style.visibility='hidden'; 
    }

    function valida(e){
         validaNombre(e);
         validaEdad(e);
         validaSemestre(e);
         validaIngreso(e);
         e.preventDefault();
    }
    
    formulario.addEventListener("submit",valida)

})();
