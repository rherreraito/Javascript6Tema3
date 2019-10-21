/*
    Autor: Rafael Herrera García
    Archivo: ejercicio17.js
    Descripción: Manipulación de DOM para gestionar eventos.
*/
var x_motion = "plus";
var y_motion = "plus";
//
var top_border = 100;
var bottom_border = 300;
var left_border = 100;
var right_border = 600;

function moveSmile(){
  var the_smile,
      smile=document.getElementById("smile");

      the_smile = smile.style;
      if (x_motion == "plus") {
           the_smile.left = parseInt(the_smile.left) + 5+"px";
      } else {
           the_smile.left = parseInt(the_smile.left) - 5+"px";
      }

      if (y_motion == "plus"){
          the_smile.top = parseInt(the_smile.top) + 5+"px";
      } else {
            the_smile.top = parseInt(the_smile.top) - 5+"px";
      }

      if (parseInt(the_smile.left) > right_border) {
          x_motion = "minus";
      } else if (parseInt(the_smile.left) < left_border) {
          x_motion = "plus";
      }

      if (parseInt(the_smile.top) > bottom_border){
         y_motion = "minus";
      } else if (parseInt(the_smile.top) < top_border) {
         y_motion = "plus";
      }

      theTimeOut = setTimeout('moveSmile()', 100);
}

d=document.getElementsByTagName("div")[0];
d.style.position="relative";