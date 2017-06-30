/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var numerouno;
var numerodos;
var resultado;

function sumar()
{	
	numerouno = parseInt(document.getElementById("numeroUno").value);
    numerodos = parseInt(document.getElementById("numeroDos").value);
    resultado = numerouno + numerodos ;
    alert("la suma de los numeros es: " + resultado);
}

function restar()
{
	numerouno = parseInt(document.getElementById("numeroUno").value);
    numerodos = parseInt(document.getElementById("numeroDos").value);
    resultado = numerouno - numerodos ; 
    alert("el resultado de la resta es:" + resultado);
}

function multiplicar()
{ 
	numerouno = parseInt(document.getElementById("numeroUno").value);
    numerodos = parseInt(document.getElementById("numeroDos").value);
    resultado = numerouno * numerodos;
    alert("el resultado de la multiplicacion es:" + resultado );

}

function dividir()
{
	numerouno = parseInt(document.getElementById("numeroUno").value);
    numerodos = parseInt(document.getElementById("numeroDos").value);
    resultado = numerouno / numerodos;
    alert("el resultado de la division es: " + resultado );
    
}

