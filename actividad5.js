
function pedirEntrada(mensaje) {
    let entrada = prompt(mensaje);
    while (!entrada) {
      entrada = prompt("Entrada inválida. " + mensaje);
    }
    return entrada;
  }
  
  function main() {
    console.log("Bienvenido a la Tienda de Stickers");
  
    
    let tamañoStickers = pedirEntrada("Seleccione el tamaño de los stickers (pequeño/grande):").toLowerCase();
  
   
    let costoUnitario;
    if (tamañoStickers === "1 pequeño") {
      costoUnitario = 4000;
    } else if (tamañoStickers === " 2 grande") {
      costoUnitario = 6000;
    } else {
      console.log("Tamaño no válido.");
      return; 
    }
  
   
    let cantidadStickers = parseInt(pedirEntrada("Ingrese la cantidad de stickers que desea comprar:"));
  
    
    if (cantidadStickers < 10) {
      console.log("La cantidad mínima permitida es 10. Por favor, ingrese un número válido.");
      return; 
    }
  
   
    let costoTotal = costoUnitario * cantidadStickers;
  
    console.log(`Costo total a pagar: $${costoTotal}`);
  }
  main();

