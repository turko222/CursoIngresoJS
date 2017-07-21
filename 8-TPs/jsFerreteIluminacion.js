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
var porcentaje;
var precioDesc;
var precioCIIBB;
function CalcularPrecio () 
{
 	precio=0;
    cantidadLamparas= parseInt(document.getElementById("Cantidad").value);
    marca= document.getElementById("Marca").value;
    


     if (cantidadLamparas >= 6 ){

         precio = parseInt((cantidadLamparas * 35)/2);
        
         
        if (precio >= 120 ) {
         
            precioCIIBB = parseInt(precio*1.1);
            document.getElementById("precioDescuento").value = precioCIIBB;

            }
            else{
                document.getElementById("precioDescuento").value = precio;

            }
    }

        else {

            switch (cantidadLamparas) {
                case 5:
                    if (marca == "ArgentinaLuz"){
                        precio = 175;
                        porcentaje= parseInt((precio * 40)/100);
                        precioDesc= parseInt(precio - porcentaje);
                        if (precioDesc >= 120 ) {
            
                                precioCIIBB = parseInt(precioDesc*1.1);
                                document.getElementById("precioDescuento").value = precioCIIBB;
                            
                                  }
                                     else {
                                    document.getElementById("precioDescuento").value = precioDesc;
                                         }
                        
                    
                        }
                        else {
                            precio = parseInt((cantidadLamparas*35));
                            porcentaje= parseInt((precio*30)/100);
                            precioDesc= parseInt(precio - porcentaje);
                             if (precioDesc >= 120 ) {
            
                                precioCIIBB = parseInt(precioDesc*1.1);
                                document.getElementById("precioDescuento").value = precioCIIBB;
                            
                                  }
                                     else {
                                    document.getElementById("precioDescuento").value = precioDesc;
                                         }
                             }
              
              
               break;

               case 4:
                       
                       
                        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                            precio= parseInt(cantidadLamparas*35);
                            porcentaje=parseInt(precio*0.25);
                            precioDesc= parseInt(precio-porcentaje);
                              
                                    document.getElementById("precioDescuento").value = precioDesc;
                                         }
                        
                        else{
                            precio= parseInt((cantidadLamparas*35));
                            porcentaje= parseInt(precio*0.20);
                            precioDesc= parseInt(precio-porcentaje);
                               
                                    document.getElementById("precioDescuento").value = precioDesc;
                                         }
                            
                                                       

                        break;
                        
              
              case 3:
                        if (marca== "ArgentinaLuz"){
                            precio= parseInt((cantidadLamparas*35));
                            porcentaje= parseInt((precio*15)/100);
                            precioDesc= parseInt(precio-porcentaje);
                            if (precioDesc >= 120 ) {
            
                                precioCIIBB = parseInt(precioDesc*1.1);
                                document.getElementById("precioDescuento").value = precioCIIBB;
                            
                                  }
                                     else {
                                    document.getElementById("precioDescuento").value = precioDesc;
                                         }
                            
                            
                         }
                            else{

                            
                            if (marca== "FelipeLamparas"){
                                precio= parseInt((cantidadLamparas*35));
                                porcentaje= parseInt((precio*10)/100);
                                precioDesc= parseInt((precio - porcentaje));
                             


                            }
                                else	{
                                precio= parseInt(cantidadLamparas*35);
                                porcentaje= parseInt((precio*5)/100);
                                precioDesc= parseInt((precio - porcentaje));
                               


                                }
                        }

                          break;

                    default:

                    precio = parseInt(cantidadLamparas*35);
                    document.getElementById("precioDescuento").value = precio;



                    break;
            }

 




        }

}