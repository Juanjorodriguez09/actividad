alert("bienvenido a lavanservice")
function pedirEntrada(mensaje) {
    let entrada = prompt(mensaje);
    while (!entrada) {
      entrada = prompt("Entrada inválida. " + mensaje);
    }
    return entrada;
  }
  
 
  function main() {
    while (true) {
      console.log("Bienvenido a Lavanservis: Servicio de Limpieza");
  
      
      let servicio = pedirEntrada("Seleccione un servicio (lavado/planchado):").toLowerCase();
  
     
      let tipoLavado;
      let costoLavado;
      if (servicio === "lavado") {
        tipoLavado = pedirEntrada("Seleccione el tipo de lavado (1. En seco / 2. Normal):");
        costoLavado = tipoLavado === "1" ? 4000 : tipoLavado === "2" ? 3000 : 0;
      } else if (servicio === "planchado") {
        tipoLavado = "N/A";
      } else {
        console.log("Servicio no válido.");
        continue;
      }
  
      
      let cantidadPrendas = parseInt(pedirEntrada("Ingrese la cantidad de prendas:"));
  
    
      let costoTotal = 0;
      if (servicio === "lavado") {
        costoTotal = cantidadPrendas * costoLavado;
      } else if (servicio === "planchado") {
        costoTotal = cantidadPrendas * 2000;
        costoTotal += 4000; // 
      }
  
      
      console.log("Resumen de Servicio:");
      console.log(`Tipo de servicio: ${servicio}`);
      console.log(`Tipo de lavado: ${tipoLavado === "1" ? "En seco" : tipoLavado === "2" ? "Normal" : "N/A"}`);
      console.log(`Cantidad de prendas: ${cantidadPrendas}`);
      console.log(`Costo total: $${costoTotal}`);
  
      
      let opcion = pedirEntrada("¿Desea solicitar otro servicio? (sí/no):");
      if (opcion.toLowerCase() !== "sí") {
        console.log("¡Gracias por usar Lavanservis! ¡Hasta luego!");
        break;
      }
    }
  }
  
 
  main();
  

























// let  costoApartamento = parseFloat(prompt("ingrese costo apartamento"))
// let tipoInmueble 
// do {
//     console.log("tipoInmueble")
//     console.log("usado")
//     console.log("nuevo")
//     tipoInmueble = parseInt(prompt("ingrese el tipo de tipo Inmueble (1 usado)(2 nuevo)"))
// } while (tipoInmueble !==1 && tipoInmueble !==2);

// let comisionImobiliaria 
// if (tipoInmueble !==1)
//     comisionImobiliaria = costoApartamento * 0.05
// else
//     comisionImobiliaria = costoApartamento * 0.10

// let total = costoApartamento + comisionImobiliaria
// alert("el total es de: " + total)   
// const valorPropietario = costoApartamento - comisionInmobiliaria;
// const valorInmobiliaria = comisionInmobiliaria;

// alert("el valor del propietario es de: " + valorPropietario)
// console.log
// alert("gracias por usar el programa")


