function Mostrar()
{

	var contador=0;
	// declarar variables
	var max;
	var min;
	var num;
	
	var bandera= true ;


	while(confirm("desea continuar?" , true))
	{
		contador++
		num= prompt("ingrese el numero");
		num= parseInt(num);
		
if (bandera){

	max = num;
	min = num;
	bandera= false;


}
else

	{
if (num>max){

	max=num;

}
	if(num<min){

		min= num;
	}

	}
	

}

document.getElementById("maximo").value= max;
document.getElementById("minimo").value= min;




	}

//FIN DE LA FUNCIÓN