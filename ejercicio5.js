/*
Te han contratado en una empresa de venta de ropa. Se llegó el buen fin y una de tus tareas es que calcules 
¿Cuál tendría que ser el precio final de un saco super padrísimo que cuesta 1560 que tiene un descuento de 18%?
¿Cuáles tendrían que ser las modificaciones que tendrías que hacer en caso de que el descuento sea 10%.


*/

let precioSaco = prompt("Ingrese el precio del saco");

let descuento = prompt("Ingrese el el valor del descuento (%)");

let precioFinal = (parseFloat(descuento) * parseFloat(precioSaco)) / 100 ;

alert(`El precio original del saco es: ${precioSaco} \n 
        El descuento es del: ${descuento}% \n
        El saco queda en un precio de: ${precioFinal}`);


// Para hacer el cambio del descuento solo habrá que modificar el valor de la
// variable descuento 

