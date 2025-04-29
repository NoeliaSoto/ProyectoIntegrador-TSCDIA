const productos = [
    { nombre: "Notebook", precio: 1200 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Auriculares", precio: 80 },
];

const prodmayora100 = productos.filter(producto => producto.precio > 100);
console.log("Los productos con precio mayor a 100 son: ", prodmayora100)

const arraynuevo = productos.map(producto => `${producto.nombre}: ${producto.precio}`);
console.log("Nuevo Array es:", arraynuevo);

const preciototal = productos.reduce()

const prodbaratos = productos
  .filter(producto => producto.precio < 100)
  .map(producto => producto.nombre.toLowerCase());
console.log("Los productos con precio menor a 100 son:", prodbaratos);
