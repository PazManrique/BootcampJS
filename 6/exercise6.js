/* EJERCITACION 6
El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1.
Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
Usar la función prompt() para leer el numero por pantalla, si se desea.*/

let n = parseInt(prompt("ingrese un número"));
  let f = 1;
  for(i = 1; i <= n; i++)  {
    f = f * i;
  }
  i = i - 1; 


alert(f);
