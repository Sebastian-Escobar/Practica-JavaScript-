/////classs///////////

class persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    comer() {
        alert(`${this.nombre}, esta comiendo...`)
    }
};

const nuevaPersona = new persona(`alvarito`, `jotar`, 24);
console.log(nuevaPersona);