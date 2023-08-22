function pedirEntrada(mensaje) {
    let entrada = prompt(mensaje);
    while (!entrada) {
      entrada = prompt("Entrada inválida. " + mensaje);
    }
    return entrada;
  }
  
  
  function mostrarInformacionReferencia(marca, referencia) {
    console.log(`Información de ${referencia} de ${marca}`);
    
  }
  

  function main() {
    while (true) {
      let marca = pedirEntrada("Ingrese la marca de carros (Chevrolet, Mazda, Renault):");
  
    
      let referencia;
      switch (marca.toLowerCase()) {
        case "chevrolet":
          referencia = pedirEntrada("Ingrese la referencia (Captiva o Tracker):");
          break;
        case "mazda":
          referencia = pedirEntrada("Ingrese la referencia (Modelo A o Modelo B):");
          break;
        case "renault":
          referencia = pedirEntrada("Ingrese la referencia (Referencia X o Referencia Y):");
          break;
        default:
          console.log("Marca de carros no válida.");
          continue;
      }
  
      mostrarInformacionReferencia(marca, referencia);
  
   
      let dineroDisponible = parseFloat(pedirEntrada("Ingrese la cantidad de dinero disponible:"));
  
      let precioCarro;
      switch (referencia.toLowerCase()) {
        case "captiva":
          precioCarro = 25000;
          break;
        case "tracker":
          precioCarro = 20000;
          break;
        case "modelo a":
          precioCarro = 28000;
          break;
        case "modelo b":
          precioCarro = 23000;
          break;
        case "referencia x":
          precioCarro = 18000;
          break;
        case "referencia y":
          precioCarro = 21000;
          break;
      }
      
      if (dineroDisponible >= precioCarro) {
        console.log("¡Felicitaciones! Puede comprar el carro.");
      } else {
        console.log("El monto no es suficiente para comprar el carro.");
      }
  
      // Paso 6: Reinicio del Programa
      let opcion = pedirEntrada("¿Desea seleccionar otro carro? (sí/no):");
      if (opcion.toLowerCase() !== "sí") {
        console.log("¡Gracias por usar VenXtucarro! ¡Hasta luego!");
        break;
      }
    }
  }
  
 
  main();
  
  
  
