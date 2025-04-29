function procesar(arr, callblack){
    return arr.map(callblack)
}
const resultado = procesar([1, 2, 3], x => x * 2);
console.log(resultado);