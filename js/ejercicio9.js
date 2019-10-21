/*
    Autor: Rafael Herrera García
    Archivo: ejercicio9.js
    Descripción: Manipulación de DOM para mover un componente.
*/

function mover(){
    var p=document.getElementsByTagName('div'),
        posx=0,posy=0,
        sentido=0;
        
    p[0].style.width="500px";
    p[0].style.height="500px";
    p[0].style.backgroundColor="blue";
    p[0].style.position="relative";
    p[1].style.height="50px";
    p[1].style.width="50px";
    p[1].style.backgroundColor="yellow";
    p[1].style.position="absolute";
    p[1].style.top="0px";p[1].style.left="0px";
    setInterval(rect,5);
    function rect(){
        switch(sentido){
            case 0: if(posx==450)
                       sentido=1;
                    else{
                        p[1].style.top=posy+"px";
                        p[1].style.left=posx+"px";
                        posx++;
                        posy++;
                    }
                    break;
            case 1:if(posy==0)
                       sentido=2;
                    else{
                        p[1].style.top=posy+"px";
                        posy--;
                    }
                    break;
            case 2:if(posy==450)
                     sentido=3;
                    else{
                        p[1].style.top=posy+"px";
                        p[1].style.left=posx+"px";
                        posy++;
                        posx--;
                    }
                    break;
            case 3:if(posy==0)
                        sentido=0;
                    else{
                        p[1].style.top=posy+"px";
                        posy--;
                    }
        }
    }
}

mover();