//////settes y getters//////
/*
class Rectangulo {
    constructor(alto = 0, ancho = 0){
        this.alto = alto;
        this.ancho = ancho;
    }
    set setearAlto(valor){
        this.alto = valor;
    }
    set setearAncho(valor){
        this.ancho = valor;
    }
    get area(){
        return this.alto * this.ancho;
    }
}

const rectanguleitor = new Rectangulo();
rectanguleitor.setearAlto = 24;
rectanguleitor.setearAncho = 12;
*/

///////////////////////////////////BOM/////////////////////////////
/*
console.log(window.navigator);
console.log(window.location);
window.alert(`Esperame`);
window.location.href = `https://www.google.com.ar`;
window.location.reload ();
window.location.replace(`https://www.google.com.ar`)
console.log(window.history);
window.history.back();
window.history.go(-1);
console.log(window.screen);
console.log(window.frames);
*/

/////////////////////////funciones del tiempo///////////////////////
//////////////////setInterval///////////////
/*setInterval(() => {
    
}, interval);

const loop = setInterval(() => {
    console.log(`estoy en un serInterval`);
}, 2000);

////////////////clearInterval////////////// es para frenar el (setInterval)//
const stoploop = () => {
    clearInterval(loop);
    console.log(`El loop ha muerto`);
};
*/

////////////////////////DOM////////////////////

console.log (document.body);
document.body.innerHTML = `<h1> hola como estas</h1>`;

