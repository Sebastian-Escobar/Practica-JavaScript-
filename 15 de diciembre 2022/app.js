/// DOM

//document.body.innerHTML = `<h1>hello</h1>`;
/*
console.log(document.getElementById("title"));
console.log(document.querySelector(`h2`)); //el (((querySelector))) te puede trar la informacion por (class)(id)(etiqueta);
*/
//al agregar ((All)) al final te trae todos con la misma etiqueta. 
 //de lo contrario te trae al primer elemento con la etiqueta.

let myDiv = document.createElement(`div`); //paso 1 crear el contenedor 
myDiv.innerHTML = `<h3>Soy el h3 que esta en el div</h3>` ///paso 2 darle contenido al div
myDiv.className = `myDiv`; /// paso 3 dar una clase.
document.getElementById(`ection12`) .appendChild(myDiv); //// paso 4 ubicacion del documento con ((getElementById: para selecionar el elemento))
                                                         //// y (((appendChild)) para colocar el elemento creado///
                                                         
 ///Clonar nodos ////
 
 let mySection = document.getElementById(`ection12`);

 document.body.appendChild(mySection.cloneNode(true));