const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const triplos = numeros.map((numero) => {
    return numero*3;
});

const metades = numeros.map((numero) => {
    return numero/2;
});

console.log(triplos);
console.log(metades);