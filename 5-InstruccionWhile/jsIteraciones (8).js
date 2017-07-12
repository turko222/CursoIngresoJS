function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	respuesta= confirm("desea continuar");

while (respuesta == true){
contador++;

num= prompt("ingrese un nro");
num=parseInt(num);


if (num>=0){

	positivo=parseInt(positivo+num) ;
}
else{
negativo= parseInt(negativo*num);
}
respuesta = confirm("desea continuar");


}









document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN