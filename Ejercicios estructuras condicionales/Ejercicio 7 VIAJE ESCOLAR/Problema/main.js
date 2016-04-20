
var alumnos = prompt ("¿Cuántos alumnos irán de viaje?");
var pago = alumnos * costo
var bus= parseInt(4000)
var menor = bus / alumnos

if (alumnos< parseInt(30)) {
	alert("El costo de la renta del autobus por " + alumnos + " alumnos es de " + bus + " pesos, y cada alumno pagará " + menor + " pesos.")
}
else if (alumnos>= parseInt(30) && alumnos<= parseInt(49)) {
	var costo = parseInt(95);
	var pago = alumnos * costo
	alert("El costo por alumno es de  " +  costo + " y a la compañia se le pagará " + pago + " pesos, en total.")
}
if (alumnos>= parseInt(50) && alumnos<= parseInt(99)) {
	var costo = parseInt(70);
	var pago = alumnos * costo
	alert("El costo por alumno es de  " +  costo + " y a la compañia se le pagará " + pago + " pesos, en total.")
}
else if (alumnos>= parseInt(100)) {
	var costo = parseInt(65);
	var pago = alumnos * costo
	alert("El costo por alumno es de  " +  costo + " y a la compañia se le pagará " + pago + " pesos, en total.")
}

