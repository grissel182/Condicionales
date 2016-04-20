var P = prompt("¿Cuántas personas irán en el autobus?")
var Km = prompt("¿Cuántos kilometros recorrerán?")
var costo = Km * 2
var total = (Km * parseInt(2)) * P
var total2 = (Km * parseFloat(2.5)) * P
var costo2 = Km * 2.5
var total3 = (Km * parseInt(3)) * P
var costo3 = Km * 3
// ahora de 20
var costoA = (Km * 2 ) * 20
var costoB = (Km * 2.5 ) * 20
var costoC = (Km * 3 ) * 20
var tarifa = prompt("Por favor seleccione la tarifa que desea pagar, Autobus Básico ($2.00 x km): A, Autobus General: B ($2.50 x km), Autobus Plus ($3.00 x km): C \n Ingrese la opción deseada (en MAYÚSCULA), A, B o C")

if (P<20){
	switch (tarifa) {
		case "A" : alert("Regular: tendrá un costo total del camión por " + costoA + " pesos, ya que el mínimo de pasajeros es 20")
		break;
		case "B" : alert("Plus: tendrá un costo total del camión por " + costoB + " pesos, ya que el mínimo de pasajeros es 20")
		break;
		case "C" : alert("Premium: tendrá un costo total del camión por " + costoC + " pesos, ya que el mínimo de pasajeros es 20")
		break;
		default : alert("Su respuesta debe de ser A, B o C para poder cotizar, Gracias")
	}
}

else if (P>=20){
	switch (tarifa) {
		case "A" : alert("Regular: costará por persona " + costo + " y en total del camión por " + P + " será de "+ total + " pesos")
		break;
		case "B" : alert("Plus: costará por persona " + costo2 + " y en total del camión por " + P + " será de "+ total2 + " pesos")
		break;
		case "C" : alert("Premium: costará por persona " + costo3 + " y en total del camión por " + P + " será de "+ total3 + " pesos")
		break;
		default : alert("Su respuesta debe de ser A, B o C para poder cotizar, Gracias")
	}	
}

