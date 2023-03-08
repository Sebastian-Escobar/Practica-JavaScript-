////POO/// OBJETO
/*
const auto = {
    marca: `Peugeot`,
    modelo: `306`,
    puertas: () => {console.log(`5`);}
};

console.log(auto);

///agregar propiedad ////

auto.año = `2022`;

console.log(auto);

///eliminar propiedad///

delete auto [`puertas`]
console.log(auto);
*/
///recorrer un objeto //
/*
const keys = Object.keys(auto);
for (let i = 0; i < keys.length; i++) {
    console.log(auto[keys[i]]);    
}
*/
/*
const products = [
    {id:1, name: `leche`, price: 120, categories: [`familiar`,`comida`] },
    {id:2, name: `arroz`, price: 80, categories: [`familiar`, `comida`] },
    {id:3, name: `lavadora`, price: 7000, categories: [`electrodomesticos`]}
];

////recorrer un array con object adentro///

products.map( (prod)=> {
    console.group(prod.name)
    console.log(`id: ${prod.id}`);
    console.log(`price: ${prod.price}`);
    console.log(`cat: ${prod.categories.join(", ")}`);
    console.groupEnd()

}) 
*/
/////////////funcion constructora //////////////

const auto2 = {
    color: `rojo`,
    marca: `fiat`,
    modelo: `punto`,
    año: 2020,
};

function Auto(color, marca, modelo, año) {
    this.colorA = color;
    this.marcaA = marca;
    this.modeloA = modelo;
    this.añoA = año;
};

const autito = new Auto(`negro`, `chevrolet`, `cruce`, 2022);
console.log (autito);

////////////////////////////////////////////////

function Bisi(color, marca, modelo, año) {
    this.colorA = color;
    this.marcaA = marca;
    this.modeloA = modelo;
    this.añoA = año;
};

const bisi2 = new Bisi (`roja`, `bianchi`, `estandar`, 2005);
console.log(bisi2);

//////constructor object////////
const people = new Object();
people.name = `alvaro`;
people.age = 25;

console.log (people);

