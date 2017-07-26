/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var nro1;
var nro2;
var operaciones;


function comenzar()
{
    nro1= parseInt(Math.random()*(10-1)+1);
    nro2= parseInt(Math.random()*(10-1)+1);
	operaciones= parseInt(Math.random()*(4-1)+1);
   document.getElementById("PrimerNumero").value= nro1;
   document.getElementById("SegundoNumero").Value= nro2;

   switch (operaciones) {
       case 1:
           document.getElementById("Operador").value= "Suma";
       case 2:
            document.getElementById("Operador").value= "resta";
       case 3:
            document.getElementById("Operador").value= "multiplicacion";
       case 4:
            document.getElementById("Operador").value= "division";
           break;
   
       default:
           break;
   }

}//FIN DE LA FUNCIÓN
function Responder()
{
	

}//FIN DE LA FUNCIÓN
