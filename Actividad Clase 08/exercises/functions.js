var suma = function(n1, n2){
    return n1 + n2;
};
/*Otra forma

function suma(n1, n2){
    return n1 + n2;
}

*/
var r1 = suma(5, 8);
var r2 = suma(-4, -6);
var r3 = suma('2', 2);
var r4 = suma(1, true);

console.log(r1, r2, r3, r4);

//En modo estricto no permite usar declaraciones de cosas que todavía no estan escritas.

//B
var suma = function(n1, n2){
    if(typeof(n1) !== 'number' || typeof(n2) != 'number'){
        alert('Una de las variables no es un número.');
        return NaN;
    }
    return n1 + n2;
};

//C
var ValInt = function(n){
    if(n - parseInt(n)) return true;
    return false;
}

//D
var suma = function(n1, n2){
    if(typeof(n1) !== 'number' || typeof(n2) != 'number'){
        alert('Una de las variables no es un número.');
        return NaN;
    }
    
    return n1 + n2;
};