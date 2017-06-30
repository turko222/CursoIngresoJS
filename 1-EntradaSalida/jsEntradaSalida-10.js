/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
    var descuento;

importe = parseInt(document.getElementById("importe").value)

descuento = importe - (importe * 25/100);

document.getElementById("resultado").value = parseInt(descuento);

}
