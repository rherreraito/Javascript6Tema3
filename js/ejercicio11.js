/*
    Autor: Rafael Herrera García
    Archivo: ejercicio11.js
    Descripción: Manipulación de DOM para agregar componentes mostrando gráfico.
*/

function hacerGrafica(){
    var p=document.getElementsByTagName('div')[0],
        e,x=10,
        datos=[135,184,203,120,101,232],
        maxi=Math.max(...datos),
        color=["blue","red","yellow","green","orange","deeppink"];
    p.style.position='relative';
    p.style.width="500px";
    p.style.height="500px";
    for(i=0;i<datos.length;i++){
        t=Math.floor(datos[i]*500/maxi);
        e=document.createElement("div");
        e.style.width="40px";
        e.style.position='absolute';
        e.style.backgroundColor=color[i];
        e.style.height=t+"px";
        e.style.left=x+"px";
        e.style.top=500-t+"px";
        x=x+60;
        p.appendChild(e);
    }  
   e=document.createElement('div');
   e.innerHTML="<H2>Ejemplo de gr&aacute;fica de barras</h2>";
   e.style.position="absolute";
   e.style.top="490px"
   p.appendChild(e);
}

hacerGrafica();