var B = prompt("Ingresa el Precio del traje que comprarás ")
var A = 2500;
var D1 = 0.85;
var D2 = 0.92;
var menor = B * D2
var mayor = B * D1


if (B < A){
alert( " El costo de tu traje, ya aplicando el 8% de descuento es de " + menor )
}else {
alert(" El costo de tu traje, ya aplicando el 15% de descuento es de " + mayor )
}