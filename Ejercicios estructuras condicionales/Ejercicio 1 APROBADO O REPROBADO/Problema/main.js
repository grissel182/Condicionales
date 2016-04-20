var n1 = prompt("Primera nota: ")
var n2 = prompt("Segunda nota: ")
var n3 = prompt("Tercera nota: ")
var P = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3
if (P >= 6){
alert("Aprobado porque sacaste de promedio: " + P.toFixed(2))
}else {
alert("Reprobado porque sacaste de promedio: " + P.toFixed(2))
}