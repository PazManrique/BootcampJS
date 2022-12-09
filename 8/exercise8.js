/*EJERCITACION 8
A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:
• 1. Número de enlaces de la página
• 2. Dirección a la que enlaza el último enlace
• 3. Numero de párrafos
• 4. Agregar un nuevo párrafo.*/

window.onload = function() {
    // Numero de enlaces de la pagina
    var enlaces = document.getElementsByTagName("a");
   alert("Numero de enlaces = "+enlaces.length); 

   let mensaje = "El penultimo enlace apunta a: "+enlaces[enlaces.length-1].href;
  alert(mensaje);

    // Numero de parrafos
    var parrafos = document.getElementsByTagName("p");
   alert("Numero de parrafos = "+parrafos.length); 
}

function init() {
 
    let p = document.createElement("p");
    let pTexto = document.createTextNode("Creando párrafo para el ejercicio 8");
    p.appendChild(pTexto);
 
    document.body.appendChild(p);
 
}
 
window.onload = init;