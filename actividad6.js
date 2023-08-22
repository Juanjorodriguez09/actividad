

alert ("Bienvenido a italiana pizza")

console.log("1. Pizza");
console.log("2. Sándwiches");
console.log("3. Ensaladas");


const opcion = parseInt(prompt("Seleccione una opción:1 pizza,2 sandwiches,3 ensaladas"));

let producto = "";
let precio = 0;


if (opcion === 1) {
    producto = "Pizza";
    precio = 7000;
} else if (opcion === 2) {
    producto = "Sándwich";
    precio = 5000;
} else if (opcion === 3) {
    producto = "Ensalada";
    precio = 15000;
} else {
    console.log("Opción no válida");
    process.exit(1);
}


const cantidad = parseInt(prompt(`Ingrese la cantidad de porciones de ${producto} que desea:`));

let costoTotal = precio * cantidad;


const agregarSalsa = prompt("¿Desea agregar salsa adicional por $500? (Sí/No)").toLowerCase();

if (agregarSalsa === "sí" || agregarSalsa === "si") {
    costoTotal += 500;
}

console.log(`Total a pagar por su pedido de ${producto}: $${costoTotal}`);
