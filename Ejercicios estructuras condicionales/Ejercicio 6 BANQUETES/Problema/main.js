var platillo = 95
var personas = prompt ("¿Cuántos asistentes tendrá el evento?")
var costo = platillo * personas
if (personas<=200) {
	alert("El costo por platillo es de " +  platillo + " serían " + costo + " pesos, en total.")
}
else if(personas>200 && personas<= 300) {
	var platillo = 85;
	alert("El costo por platillo es de " +  platillo + " serían " + costo + " pesos, en total.")
}
else if(personas>300) {
	var platillo = 75;
	alert("El costo por platillo es de " +  platillo + " serían " + costo + " pesos, en total.")
}