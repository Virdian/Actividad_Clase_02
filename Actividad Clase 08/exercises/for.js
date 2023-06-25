/* A -- Crear un array que contenga 5 palabras y recorrer dicho array utilizando unbucle for de JavaScript
para mostrar una alerta utilizando cada una de laspalabras.*/

var colores = ['rojo', 'verde', 'amarillo', 'azul', 'naranja'], i;

for (i = 0; i < 5; i++)
{
	alert(colores[i]);
}

/* B -- Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta 
por cada palabra modificada.*/

var colores = ['rojo', 'verde', 'amarillo', 'azul', 'naranja'], i;

for (i = 0; i < 5; i++)
{
	colores[i] = colores[i].substring(0,1).toUpperCase() + colores[i].substring(1).toLowerCase();
}
console.log(colores)

/* C -- Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto A) 
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
Al final mostrar una única alerta con la cadena completa.*/

var colores = ['rojo', 'verde', 'amarillo', 'azul', 'naranja'], i;
var sentence = '';

for (i = 0; i < 5; i++)
{
	sentence += colores[i];
}

alert(sentence);

/* D -- Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de
la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro
del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final
(utilizar console.log).*/

var repeticiones = ['']

for (i = 0; i < 10; i++)
{
	repeticiones[i] = i;
}

console.log(repeticiones);