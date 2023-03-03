///practica array------array=formacion///
///creando array///
///let alumnos = [`lili`, `mauro`, 12, "diana", "chicho" ];
//console.log(alumnos);
////el ultimo de la lista///
//console.log (alumnos[ alumnos.length -1]); ////longitud - uno.
/// recorriendo el array///
/*for(let i = 0; i < alumnos.length; i++) {
 if (typeof(alumnos[i]) == `number`) {
    alert(`se encontro el numero. ${alumnos [i]} en la posicion ${i}.`)   
 }
};*/

//////////----------añadir items a un array (al final) (push)-- (push = empujar)----------//////
//alumnos.push(`maru`,`code`);
//console.log (alumnos);

////----------eliminar el ultimo elemento (pop)------(pop = estallido(---------//////////
//alumnos.pop();
//console.log (alumnos);

/////////........añadir elemento al pricipio (unshift)--(unshift = desarmar)--------///////////
//alumnos.unshift(`lenovo`);
//console.log (alumnos);

////////-------------- eliminar el primer elemento (shift)-----(shift = cambiar)---------------////

//alumnos.shift();
//console.log(alumnos);

///////--------------encontrar el indice de un alumno con su nombre (indexOf)-----///////
///console.log(alumnos.indexOf("chicho")); 

///////-----------eliminar un elemento en particular.....(splice)---------------////////

///alumnos.splice(0,1);  /////(0---> posicion) ----- (1 ----> apartir de esa pocision se elmina).----///
///console.log(alumnos);

////----añadir un nuevo elemento con splice en una posicion puntual-----////
//alumnos.splice(2,0,"mariano");
///console.log(alumnos);

////---concatenar 2 array--- usando (concat)------/////
let alumnos = [`lili`, `mauro`, 12, "diana", "chicho" ];
let alumnos2 = [300, 5000, 200];

const alumnos3 = alumnos.concat(alumnos2);
console.log(alumnos3);

//// determinar la existencia de alguna elemento del array-- con (incluides)---///
console.log(alumnos.includes("mauro"));

////-------------------inverti el orden de un array-----(reverse)----//////
console.log(alumnos3.reverse());

////////----------ordenar items en un array---(sort)-(sort = clasificar)---/////
console.log(alumnos3.sort())

//////-----------estraer sierta parte de un array---(slice)----- (slice = rebanada)-////

/*const alumnos4 = alumnos3.slice(1,2);
console.log(alumnos4);
const alumnos4 = alumnos3.slice(1,2);
console.log(alumnos4);
const alumnos4 = alumnos3.slice(1,2);
console.log(alumnos4);*/