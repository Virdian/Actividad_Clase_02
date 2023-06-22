/* A -- Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si elvalor es mayor o igual que 0,5 mostrar
una alerta con el mensaje “Greater than0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

var n = Math.random();

if (n >= 0.5)
{
	alert('Greater than 0,5');
}
else
{
	alert('Lower than 0,5')
}

/* B -- Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
i. “Bebe” si la edad es menor a 2 años;
ii. “Niño” si la edad es entre 2 y 12 años;
iii. “Adolescente” entre 13 y 19 años;
iv. “Joven” entre 20 y 30 años;
v. “Adulto” entre 31 y 60 años;
vi. “Adulto mayor” entre 61 y 75 años;
vii. “Anciano” si es mayor a 75 años;*/

var Age = Math.floor(Math.random() * 100);

if (Age < 2)
{
	alert('Bebe');
}
if (Age >= 2 && Age <= 12)
{
	alert('Niño');
}
if (Age >= 13 && Age <= 19)
{
	alert('Adolescente');
}
if (Age >= 20 && Age <= 30)
{
	alert('Joven');
}
if (Age >= 31 && Age <= 60)
{
	alert('Adulto');
}
if (Age >= 61 && Age <= 75)
{
	alert('Adulto Mayor');
}
if (Age > 75)
{
	alert('Anciano');
}