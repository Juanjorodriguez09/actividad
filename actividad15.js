
function generarLineaAsteriscos(cantidad) {
    return "* ".repeat(cantidad);
  }
  
  
  function generarLineaIgual(cantidad) {
    return "= ".repeat(cantidad);
  }
  
  function main() {
    for (let i = 1; i <= 9; i++) {
      if (i % 2 === 0) {
        console.log(generarLineaIgual(11));
      } else {
        console.log(generarLineaAsteriscos(6) + generarLineaIgual(10));
      }
    }
  }
  
  main();
  