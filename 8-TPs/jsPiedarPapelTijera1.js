/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	numeroSecreto =Math.floor( Math.random()*3)+1;
		alert(numeroSecreto);
		switch(numeroSecreto)
		{
			case 1:
				eleccionMaquina="piedra";
				break;
			case 2:
				eleccionMaquina="papel";
				break;
			case 3:
				eleccionMaquina="tijera";
				break;


}//FIN DE LA FUNCIÓN
function piedra()
{
	switch (eleccionMaquina) {
        case 1:
            alert("Empate");
            break;
        case 2:
            alert("El papel le gana a la piedra, perdiste!");
            break;
        case 3:
            alert("La piedra le gana a la Tijera, GANASTE!");
            break;


        default:
            break;
    }

}//FIN DE LA FUNCIÓN
function papel()
{
switch (eleccionMaquina) {
        case 1:
            alert("El papel le gana a la piedra, Ganaste");
            break;
        case 2:
            alert("EMPATE!");
            break;
        case 3:
            alert("!La Tijera corta el papel, Perdiste!");
            break;


        default:
            break;

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina) {
        case 1:
            alert("La Piedra rompe la tijera, GANASTE!");
            break;
        case 2:
            alert("La Tijera corta el papel, Perdiste!");
            break;
        case 3:
            alert("EMPATE!");
            break;


        default:
            break;

}//FIN DE LA FUNCIÓN