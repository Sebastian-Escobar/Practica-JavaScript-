//Declaracion de condicional if
//          SI
// if (condicion)
// {hacer}
// Ejemplo 
////////---------------condicional simple-------------//////

/*const unica = 15;
const casi = 18;
const dinero = 10000;
const falta = 12000;
if (unica < casi || dinero == falta) {
    alert("genio")    
};*/
/*const edad1 = 23;
const maria = prompt("edad de maria");
const mara = 22;
const dora =prompt("edad de dora");
const yimi= 33;
if (maria > mara || dora < yimi) {
   alert("es mayor") 
};*/

///////////////---------------condicional doble---------------//////
//if y else///
/*
const numero1=prompt("primer numero");
const numero2=prompt("segundo numero");
if (numero1 < numero2) {
    alert ("verdadero");
} else {
    alert ("falso");
}*/
//---------------------------------------------------------------/////
/////////////---------------condicional anidada------------------/////
/*                              if else
const a=10;
if (a<8) {
    alert("es menor a 8")
} else {
    if (a>8) {
      alert("es mayor a 8")   
    } else {
        alert("en numero es igual a 8")
    }
}*/

/////////////-------------condicional else if ---------------////////

/*const numero =10;

if (numero < 10) {
    alert("el numero es menor a 10")
} else if (numero > 10) {
    alert("el numero es mayor a 10")
} else {
     alert("el numero es igual a 10")
}*/
    
/////////---------------------condicional switch --------------------////

const day = prompt("dia");

switch (day) {
    case "lunes":
        console.log("hoy es lunes")
        break;
    case "martes":
        console.log("hoy es) martes")
        break;
    case "miercoles":
        console.log("hoy es miercoles")
        break;
    case "jueves":
        console.log("hoy es jueves")
        break;
    case "viernes":
        console.log("hoy es viernes")
        break;
    case "sabado":
        console.log("hoy es sabado")
        break;
    case "domingo":
        console.log("hoy es domingo")
        break;         
    default:
        console.log("no es un dia")
        break;
}

