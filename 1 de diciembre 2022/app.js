/*
function Auto (marca, modelo, km) {
    this.marca = marca;
    this.modelo = modelo;
    this.km = km;
    this.Kilometraje = (x = 2020) => {
        alert(`Tiene ${this.km} km. ${x}`);
    };
};

const nuevoAuto = new Auto( `peugeot`, `306`, 10000);


//objeto Date///
const date = new Date ();
console.log(date.getFullYear());

//////expresion regular//////
 //validar el uso de caracteres específicos///
const newReg = new RegExp (`^[^@]+@[^@]+\.[a-zA-Z]{2,}$`);

const newReg2 = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

if (newReg2.test(`sebastianescobar_92@hotmail.com`)) {
    alert(`Email Valido`);
} else {
    alert(`Email Invalido`);
};

//////// try catch /////

try {
    if (newReg2.test(`sebastianescobar_92@hotmail.com`)) {
        alert(`Email Valido`);
    } else {
      throw new Error(`Email Invalido`);
    };  
    
} catch (error) {
    console.error(err.message);
    alert(err.message);
};
*/

