///practica array------array=formacion///
///creando array///
let alumnos = [`lili`, `mauro`, 12, "diana", "chicho" ];
//console.log(alumnos);
////el ultimo de la lista///
//console.log (alumnos[ alumnos.length -1]); ////longitud - uno.
/// recorriendo el array///
/*for(let i = 0; i < alumnos.length; i++) {
 if (typeof(alumnos[i]) == `number`) {
    alert(`se encontro el numero. ${alumnos [i]} en la posicion ${i}.`)   
 }
};*/

//////////----------añadir items a un array (al final) (push)------------//////
alumnos.push(`maru`,`code`);
console.log (alumnos);

////----------eliminar el autimo elemento (pop)---------------//////////
alumnos.pop();
console.log (alumnos);

/////////........añadir elemento al pricipio (unshift)----------///////////
alumnos.unshift(`lenovo`);
console.log (alumnos);