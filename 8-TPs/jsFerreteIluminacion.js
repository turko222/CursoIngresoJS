/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var cantidadLamparas;
var marca;
var precio;

function CalcularPrecio () 
{
 	precio=0;
    cantidadLamparas= parseInt(document.getElementById("Cantidad").value);
    marca= document.getElementById("Marca").value;
    

}
     if (cantidadLamparas >= 6 ){

         precio = (cantidadLamparas * 35)/2;
        document.getElementById("Precio con descuento").value = precio;
         
         if (precio >= 120 ) {
            var precioCIIBB;
            precioCIIBB = precio*1.1;
            document.getElementById("Precio con descuento").value = precioCIIBB;

            }

    }

        else {

            switch (cantidadLamparas) {
                case 5:
                    if (marca == "ArgentinaLuz"){
                        precio = (cantidadLamparas * 35)-40%;
                        document.getElementById("Precio con descuento").value = precio;
                        }
                        else {
                            precio = (cantidadLamparas*35)-30%;
                             }
               break;

               case 4
            
                default:
                    break;
            }






}
