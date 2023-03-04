////// Practicando métodos para strings y numbers ///////

//cambiar todo a mayusculas (touppercase) = a mayusculas///

//cambiar todo a minusculas (tolovecase) = a minusculas///

////propiedad length ======>>> logitud /////////

////buscar el indice de la palabra (charAT)//////

////el metrodo (((trim))) quita los pesacios de mas//////

////substring(1); muestra los caracteres a partir del numero que se le de en este caso el a partir del 1///
/*
let apellido = prompt("ingresa tu apellido").trim(); ///prompt==> pide .......trim quira los espacios vacios. 
let primeraLetra = apellido.charAt(0);  ////charAt ===> pide la primera letra///
let letraEnMayus = primeraLetra.toUpperCase(); ////toUpperCase ==> cambia la primera letra a mayuscula///
let restoApellido = apellido.substring(1); ////substring(1); muestra los caracteres a partir del numero que se le de.//
console.log(`${letraEnMayus}${restoApellido}`); ///concatenando variables con ${}////
*/
////////replace--- para remplazar un string-----///
/*
let text2 = `El servicio de Google, que se ofrece sin costo, traduce al instante palabras, frases y páginas web del inglés a más de 100 idiomas.`

console.log(text2.replace(`servicio`, `manzana`));

////includes====> busca una palabra y te devuelve, true o falce...////

const palabra= prompt(`ingresa la palabra`);

const buscar = text2.includes(palabra);

console.log (buscar);
*/

/////////////////////metodos para datos numericos////////////////////
/*
let num1 = 44.60;
let num2 = 25;
let num3 = 34.23423432;

////redondear para abajo //////

console.log (Math.floor(num1));

//// redondear al numero mas cercano////

console.log(Math.round(num1));

///// retornar el numero mas grande ////

console.log(Math.max(num1, num2, num3));

//// redondear el numero mas pequeño ////

console.log(Math.min(num1, num2, num3));

//// elevar ala potencia ///

const base = parseInt(`4`);
const exponente = 2;

console.log(Math.pow(base, exponente));

///obtener raiz cuadrada////

console.log(Math.sqrt(num2));

////como optener numero con dos decimales ////

console.log(Math.round(num3 *100) /100);
console.log(Number(num3.toFixed(2)));

/// eliminar decimales /////

console.log(Math.trunc(num3));

///obtener numero aleatorio///

console.log(Math.floor(Math.random() * 100));

/// redondear para arriba////

console.log(Math.ceil(num3));

*/