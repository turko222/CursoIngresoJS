/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto = parseInt(Math.random()*(100-1)+1 );

	 alert(numeroSecreto);
	

}

function verificar()
{
	var numeroIngresado;

	numeroIngresado= parseInt(document.getElementById("numero").value);
contadorIntentos= 0;



if (numeroIngresado == numeroSecreto ){

contadorIntentos += 1;

switch (contadorIntentos) {
	case 1:
		
		alert("usted es un psiquico");

		break;
	case 2:
		alert("excelente percepcion");
		break;
	case 3:
		alert("esto es suerte!");
		break;
		
	case 4:
		alert("Excelente tecnica");
		break;
	case 5:
		alert("usted esta en la media");
		break;
	case 6:
		alert("Suerte en el amor!");
		break;
	case 7:
		alert("Suerte en el amor!");
		break;

	case 8:
		alert("Suerte en el amor!");
		break;
	case 9:
		alert("Suerte en el amor!");
		break;
	case 10:
		alert("Suerte en el amor!");

			default:
			break;
}


}

	else{
		contadorIntentos+= 1;

		document.getElementById("intentos").value = contadorIntentos;

	}


	}






	


	

