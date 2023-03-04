/////10 de noviembre 2022 - Repaso de Bucles / Funciones/////

///////funciones declarativas//////////


/*function saludar ( name ) {
    console.log(`hola ${name}`);
};
let user= `coco`;
saludar(user);*/

//////// funciones anonima ///////
//se declara una const con nombre antes de la funcion/// no permiete pisar la funcion con el mismo nombre. 
/*
const nombre = function (name) {
    console.log(`hola ${name}`);
};

let user = `coca`;
nombre (user); 
*/
/*
////// function arrow o funcion flecha ////

const suma = (a, b) => {
    return a + b;
};
///// funcion resumida sin return //////
const suma2 = (a, b) => a + b ;

///// funcion resumida sin parentesis////
const suma3 = a => a * 2;

///// funcion resumida sin parametros de entrada ////
const suma4 = () => 12 * 2;

//// operadores ternarios ////

console.log ( 10 == 10 ? `yes` : `nop`);  //// (? = if) y (: = else)

console.log ( 10 == 10 && `sipi`);
*/
///////////////// funciones dinamicas //////////////////
/*let age = prompt (`ingresa tu edad`);

const mayor = (age >= 18) ? ( ) => alert(`eres mayor`): ( ) => alert (`no es mayor`);

mayor();
*/
//////////////////////scope global/////////////////

/*const userName = `rodo`;

const saludar5 = () => {
    console.log (userName);
};

const a = 1;
const b = 2;

const sumar = () => {
    console.log(a + b); 
};
*/

////////////////////scope local //////////////////////

/*const saludo1 = () => {
    let user = `rodo`;
    console.log(user);
};
*/
