/*Completar las condiciones de los if del siguiente script para que los mensajes de los
alert() se muestren siempre de forma correcta:
var numero1 = 5;
var numero2 = 8;
if(...) {
alert("numero1 no es mayor que numero2");
}*/
var numero1 = prompt('Ingrese el primer número')
var numero2 = prompt('Ingrese el segundo número')

if (numero1<numero2) {
    alert(numero1 + ' es menor que ' + numero2)
} 
else if (numero1>numero2) {
    alert(numero1 + ' es mayor que ' + numero2)
}
else {
    alert(numero1 + ' es igual que ' + numero2)
}
    
