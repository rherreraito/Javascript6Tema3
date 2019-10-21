/*
    Autor: Rafael Herrera García
    Archivo: ejercicio10.js
    Descripción: Manipulación de DOM para cambiar de tamaño un componente.
*/

function mover(){
    var p=document.getElementsByTagName('div'),
        posx=[225,255,255,225],posy=[225,255,225,255],
        aumenta=true,
        theight=5,twidth=5;
        
    p[0].style.width="500px";
    p[0].style.height="500px";
    p[0].style.backgroundColor="blue";
    p[0].style.position="relative";
    p[1].style.height="5px";
    p[1].style.width="5px";
    p[1].style.backgroundColor="yellow";
    p[1].style.position="absolute";
    p[1].style.top="225px";p[1].style.left="225px";
    p[2].style.height="5px";
    p[2].style.width="5px";
    p[2].style.backgroundColor="red";
    p[2].style.position="absolute";
    p[2].style.top="255px";p[2].style.left="255px";
    p[3].style.height="5px";
    p[3].style.width="5px";
    p[3].style.backgroundColor="cyan";
    p[3].style.position="absolute";
    p[3].style.top="225px";p[3].style.left="255px";
    p[4].style.height="5px";
    p[4].style.width="5px";
    p[4].style.backgroundColor="green";
    p[4].style.position="absolute";
    p[4].style.top="255px";p[4].style.left="225px";
    setInterval(rect,5);
    function rect(){
        p[1].style.height=theight+"px";
        p[1].style.width=twidth+"px";
        p[1].style.top=posy[0]+"px";
        p[1].style.left=posx[0]+"px";
        p[2].style.height=theight+"px";
        p[2].style.width=twidth+"px";
        p[3].style.height=theight+"px";
        p[3].style.width=twidth+"px";
        p[3].style.top=posy[2]+"px";
        p[4].style.width=twidth+"px";
        p[4].style.height=theight+"px";
        p[4].style.left=posx[3]+"px";
        if(aumenta){
           twidth+=1;
           theight+=1;
           posy[0]--;
           posx[0]--;
           posy[2]--;
           posx[3]--;
           if(posy[0]==0)
               aumenta=false;
        }else{
            twidth-=1;
            theight-=1;
            posy[0]++;
            posx[0]++;
            posy[2]++;
            posx[3]++;
            if(posy[0]==225)
                aumenta=true;
        }
    }
}

mover();