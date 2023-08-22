
const costoServicio = 500;
let montoTotal = 0;

const tipoPago = prompt("Ingrese el tipo de pago (moneda/billete):").toLowerCase();

if (tipoPago === "moneda") {
    
    const valorMoneda = parseInt(prompt("Ingrese el valor de la moneda (500 o 1000):"));

    
    if (valorMoneda === 500 || valorMoneda === 1000) {
        montoTotal += valorMoneda;
    } else {
        console.log("Valor de moneda no válido");
    }
} else if (tipoPago === "billete") {
    const valorBillete = parseInt(prompt("Ingrese el valor del billete (2000 o 5000):"));

    
    if (valorBillete === 2000 || valorBillete === 5000) {
        montoTotal += valorBillete;
    } else {
        console.log("Valor de billete no válido");
    }
} else {
    console.log("Tipo de pago no válido");
}
if (montoTotal >= costoServicio) {
    if (montoTotal > costoServicio) {
        const cambio = montoTotal - costoServicio;
        console.log(`Cambio a devolver: ${cambio} pesos`);
    }
    console.log("¡Vuelve pronto!");
} else {
    console.log("Falta dinero para completar el pago");
}
