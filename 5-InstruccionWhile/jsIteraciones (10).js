function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var sumaPositivos=0;
	var sumaNegativos=0;
	var contaNegativos=0;
	var contaPositivos=0;
	var contaCeros=0;
	var contaPares=0;
	var contaImpares=0;
	var difPosyNeg=0;
	var promedio=0;
	var num=0;


	while(confirm("desea continuar?", true))
	{
	
	num= prompt("ingrese numero");
	num= parseInt(num);

	if( num <0){

		contaNegativos++;
		sumaNegativos+=num;

	}
	else if(num>0){
		contaPositivos++;
		sumaPositivos+=num;

	}
		else{
			contaCeros++;

		}	
	
	
	if (num % 2 == 1){

		contaPares++;
	}
		else {
			
			if (num % 2 == 0){

			contaImpares++;
		}
	}
	



}


difPosyNeg = parseInt(sumaPositivos-sumaNegativos);
promedio = parseInt(contaPositivos/contaPositivos);

document.write("1)La suma de los negativos es " + sumaNegativos +"<br>");
document.write("2)La suma de los positivos es " + sumaPositivos  +"<br>");
document.write("3)La cantidad de los positivos es " + contaPositivos  +"<br>" );
document.write("4)La cantidad de los negativos es " + contaNegativos +"<br>" );
document.write("5)La cantidad de 0" + contaCeros  +"<br>");
document.write("6)La cantidad de numeros pares es" + contaPares  +"<br>");
document.write("7)La cantidad de impares es " + contaImpares  +"<br>");
document.write("8)El promedio de negativos es " + promedio  +"<br>");
document.write("9)La diferencia entre positivos y negativos es " + difPosyNeg  +"<br>");



}//FIN DE LA FUNCIÓN