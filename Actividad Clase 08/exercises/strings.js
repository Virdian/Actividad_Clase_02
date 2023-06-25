/* A -- Crear una variable de tipo string con al menos 10 caracteres y convertir todo eltexto en mayúscula (utilizar toUpperCase).*/

var str = 'merequetengue';
str.toUpperCase();

/* B -- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var str1 = 'merequetengue', str2;
str2 = str1.substring(0,5);

/* C -- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var str1 = 'merequetengue', str2;
str2 = str1.substring(10);

/* D -- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */

var str1 = 'merequetengue', str2;
str2 = str1.substring(0,1).toUpperCase() + str1.substring(1).toLowerCase();

/* E -- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf).*/

var str1 = 'dont panic in big red letters', str2;
str2 = str1.indexOf(' ');

/* F -- Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y
las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

var str1 = 'hakuna matata', str2;
str2 = str1.substring(0,1).toUpperCase() + str1.substring(1,str1.indexOf(' ')).toLowerCase() + str1.substring(str1.indexOf(' ')+1,str1.indexOf(' ')+2).toUpperCase() + str1.substring(str1.indexOf(' ')+2).toLowerCase();
