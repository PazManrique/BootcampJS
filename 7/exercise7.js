/*
EJERCITACION 7
1. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelva como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función.

2. Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

let number = parseInt(prompt("Introduce un número"));

    function pair(number) {
        if(number % 2 == 0) {
          alert ("El número "+ number + " es par");
        }
        else {
            alert ("El número "+ number + " es impar");
        }
}

pair(number);