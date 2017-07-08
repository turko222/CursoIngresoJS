/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precio1;
var precio2;
var precio3;
var resultado;

function Sumar () 
{


precio1 = parseInt(document.getElementById("PrecioUno").value);
precio2 = parseInt(document.getElementById("PrecioDos").value);
precio3 = parseInt(document.getElementById("PrecioTres").value);	

resultado= precio1+precio2+precio3;

alert("La Suma de los precios es " + resultado );


}
function Promedio () 
{
	var prome;

Sumar();

    prome= resultado/3;

    alert("el promedio es "+ prome );

}
function PrecioFinal () 
{
	var precioFinal;

    Sumar();

    precioFinal = resultado*1.21;

    alert("el Precio Final es "+ precioFinal);
    

}