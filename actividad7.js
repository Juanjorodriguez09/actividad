// Solicitar al usuario si es devolución o pérdida
const opcion = prompt("¿Es una devolución o una pérdida?").toLowerCase();

if (opcion === "devolución") {
    // Si es devolución, solicitar los días de retraso y la cantidad de libros y revistas prestados
    const diasRetraso = parseInt(prompt("Ingrese la cantidad de días de retraso en la devolución:"));
    const revistasPrestadas = parseInt(prompt("Ingrese la cantidad de revistas prestadas:"));
    const librosPrestados = parseInt(prompt("Ingrese la cantidad de libros prestados:"));

    // Calcular el monto total de la multa por retraso
    const costoRetrasoRevistas = 500 * diasRetraso * revistasPrestadas;
    const costoRetrasoLibros = 600 * diasRetraso * librosPrestados;
    const montoTotalMulta = costoRetrasoRevistas + costoRetrasoLibros;

    // Mostrar el monto total de la multa
    console.log(`Monto total de la multa a pagar: $${montoTotalMulta}`);
} else if (opcion === "pérdida") {
    // Si es pérdida, solicitar la cantidad de ejemplares perdidos
    const ejemplaresPerdidos = parseInt(prompt("Ingrese la cantidad de ejemplares perdidos:"));

    // Calcular el monto total de la multa por ejemplares perdidos
    const costoPorEjemplarPerdido = 10000;
    const montoTotalMulta = costoPorEjemplarPerdido * ejemplaresPerdidos;

    // Mostrar el monto total de la multa
    console.log(`Monto total de la multa a pagar: $${montoTotalMulta}`);
} else {
    console.log("Opción no válida");
}
