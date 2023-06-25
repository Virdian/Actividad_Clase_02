/* A -- Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador.*/

var suma = function(n1, n2){
    return n1 + n2;
};

/* Otra forma:

function suma(n1, n2){
    return n1 + n2;
} */

var r1 = suma(5, 8);
var r2 = suma(-4, -6);
var r3 = suma('2', 2);
var r4 = suma(1, true);

console.log(r1, r2, r3, r4);

/* B -- A la función suma anterior, agregarle una validación para controlar si alguno de
los parámetros no es un número, mostrar una alerta aclarando que uno de los
parámetros tiene error y retornar el valor NaN como resultado.*/

var suma = function(n1, n2)
{
    if (typeof(n1) !== 'number' || typeof(n2) != 'number')
    {
        alert('Una de las variables no es un número.');
        return NaN;
    }
    return n1 + n2;
};

/* C -- Crear una función validate integer que reciba un número como parámetro y
devuelva verdadero si es un número entero.*/

var ValInt = function(n)
{
	if (n - parseInt(n)) return true;
	return false;
}

/* D -- A la función suma del ejercicio 6b) agregarle una llamada que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el
error y retorna el número convertido a entero (redondeado).*/

var suma = function(n1, n2){
	if (typeof(n1) !== 'number' || typeof(n2) != 'number')
	{
		alert('Una de las variables no es un número.');
		return NaN;
	}
	if (ValInt(n1))
	{
		alert('n1 es un decimal.')
		return Math.round(n1)
	}
	if (ValInt(n2))
	{
		alert('n2 es un decimal.')
		return Math.round(n2)
	}

	return n1 + n2;
};

var r1 = suma('5', 8);
var r2 = suma(4.8, 5);
var r3 = suma(6, 4.2);

/* E -- Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual.*/

var checkNaN = function(n1, n2)
{
	if (typeof(n1) !== 'number' || typeof(n2) != 'number')
	{
		alert('Una de las variables no es un número.');
		return true;
	}
	return false;
}

var ValInt = function(n)
{
	if (n - parseInt(n)) return true;
	return false;
}

var checkDecimal = function(n1, n2)
{
	if (ValInt(n1))
	{
		alert('n1 es un decimal.')
		return Math.round(n1)
	}
	if (ValInt(n2))
	{
		alert('n2 es un decimal.')
		return Math.round(n2)
	}
	return false;
}

var i,j;
var suma = function(n1, n2)
{
	i = checkNaN(n1, n2);
	j = checkDecimal(n1, n2);

	if (i)
	{
		return NaN;
	}
	if (j)
	{
		return j;
	}
	else
	{
		return n1 + n2
	}
}

var r1 = suma('5', 8);
var r2 = suma(4.8, 5);
var r3 = suma(6, 4.2);