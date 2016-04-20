var A = 20
var B = 25
var C = 28
var N = prompt("¿Cuántas hamburguesas deseas comprar?")

alert("Tenemos 3 tipos de Hamburguesas: \n Sencillas = $20\n Dobles =$25 \n Triples= $28\n ")
var H = prompt("Por favor ingresa que tipo de hamburguesa deseas: \n Ingresando : \n A = Sencillas \n B = Dobles \n C = Triples \n (Por favor ingresa en MAYÚSCULAS la letra correspondiente)")
var S = N * A
var D = N * B
var T = N * C
// porcentaje
var P1 = (S * 0.05) + S
var P2 = (D * 0.05) + D
var P3 = (T * 0.05) + T

switch (H) {
		case "A" : alert("Ordenaste " + N + " Hamburguesas Sencillas, que tendrán un costo de " + P1 + " pesos, incluyendo el cargo por pago con TC ")
		break;
		case "B" : alert("Ordenaste " + N + " Hamburguesas Dobles, que tendrán un costo de " + P2 + " pesos, incluyendo el cargo por pago con TC ")
		break;
		case "C" : alert("Ordenaste " + N + " Hamburguesas Triples, que tendrán un costo de " + P3 + " pesos, incluyendo el cargo por pago con TC ")
		break;
		default : alert("Su respuesta debe de ser A, B o C para poder cotizar, Gracias")
	}
