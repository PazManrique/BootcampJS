/*EJERCITACION 4
Completar las siguientes condiciones de if:
var numero1 = 5;
var numero2 = 8;
if(...) {
alert("numero2 es positivo");
}
if(...) {
alert("numero1 es negativo o distinto de cero");
}
if(...) {
alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual
que numero2");
}*/

var numero1 = prompt("Ingrese número 1");
var numero2 = prompt("Ingrese número 2");
if(numero2 >=0) {
alert("numero2 es positivo");
}
if(numero1 < 0 || numero2 > 0) {
alert("numero1 es negativo o distinto de cero");
}
if((numero1 + 1) < numero2) {
alert("Incrementar en 1 unidad el valor de " +  numero1 +  "no lo hace mayor o igual que " + numero2);
}