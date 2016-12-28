// Codigo para calcular los puntos squad

function calcular () 
{
	var puntosSquad = document.getElementById("puntosSquad").value;
	var puntosMaximo = document.getElementById("puntosMaximo").value;
	var porcentajeSquad = (100*puntosSquad)/puntosMaximo;

	if (porcentajeSquad >= 80)
	{
		document.getElementById("salida").innerHTML="Muy bien Squad!";
	} else {
		document.getElementById("salida").innerHTML="Pueden hacerlo mejor.";
	}
}