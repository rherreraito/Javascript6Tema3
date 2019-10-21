/*
    Autor: Rafael Herrera García
    Archivo: ejercicio12.js
    Descripción: Manipulación de DOM para agregar componentes.
*/

function agregaPareja() {

	if (document.getElementById("nuevaDiv") == null) {
		var nuevaDiv = document.createElement("div");
        nuevaDiv.setAttribute("id","nuevaDiv");

		var nuevaEntrada = document.createElement("input");
		nuevaEntrada.setAttribute("type","text");
		nuevaEntrada.setAttribute("id","pareja");
	
		var nombre = document.createTextNode("Nombre de Pareja:");

		nuevaDiv.appendChild(nombre);
		nuevaDiv.appendChild(nuevaEntrada);
		nuevaDiv.appendChild(document.createElement("br"));
        nuevaDiv.appendChild(document.createElement("br"));

		var Forma = document.getElementById("forma");
		var Direccion = document.getElementById("direccion");

		Forma.insertBefore(nuevaDiv, Direccion);
	}
}

function eliminaPareja() {
	if (document.getElementById("nuevaDiv") != null) {
		var nuevaDiv = document.getElementById("nuevaDiv");
		var Forma = document.getElementById("forma");
		Forma.removeChild(nuevaDiv);
	}

}