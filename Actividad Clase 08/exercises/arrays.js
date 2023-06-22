/* A -- Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
mostrar por consola los meses 5 y 11 (utilizar console.log).*/

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4], meses[10]);

/* B -- Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.sort();
console.log(meses);

/* C -- Agregar un elemento al principio y al final del array (utilizar unshift y push).
d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
e. Invertir el orden del array (utilizar reverse).
f. Unir todos los elementos del array en un único string donde cada mes este
separado por un guión - (utilizar join).
g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/