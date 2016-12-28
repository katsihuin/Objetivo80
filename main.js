// Codigo para calcular los puntos squad

function calcular () 
{
	var puntosSquad = document.getElementById('puntosSquad').value;
	var puntosMaximo = document.getElementById('puntosMaximo').value;
	var porcentajeSquad = 100*(puntosSquad/puntosMaximo);
	var salida = document.getElementById("salida");

	if (puntosSquad == "" || puntosMaximo == ""){

        document.getElementById("salida").innerHTML = "<div class='alert'>Ingrese valores</div>";
    } 
    if (porcentajeSquad >= 80) {
    	salida.innerHTML = "<div class='alert'>Muy bien Squad!</div>";
    } else { 
		document.getElementById('salida').innerHTML = "<div class='alert'>Pueden hacerlo mejor.</div>";
	}
}