
const numero = parseInt(prompt("Ingrese un número para generar la tabla de multiplicar:"));


if (isNaN(numero)) {
  console.log("Por favor, ingrese un número válido.");
} else {
 
  console.log(`Tabla de multiplicar del ${numero}:`);
  
  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    const resultado = numero * multiplicador;
    console.log(`${numero} x ${multiplicador} = ${resultado}`);
  }
}
