const numeros = [3, 7, 12, 5, 2];
const cuadrados = numeros.map(num => num * 2);
console.log("Los cuadrados son: ", cuadrados);

const nummayor5 = numeros.filter(num => num > 5);
console.log("Numeros mayores a 5: ", nummayor5);