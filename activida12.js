
    const equipos = [];
    const fechas = 3;

  
    function calcularPuntos(resultado) {
      if (resultado === "victoria") {
        return 3;
      } else if (resultado === "empate") {
        return 1;
      } else {
        return 0;
      }
    }

    for (let i = 0; i < fechas; i++) {
      for (let j = 1; j <= 3; j++) {
        const equipo = prompt(`Ingrese el nombre del equipo ${j} en la fecha ${i + 1}:`);
        const resultado = prompt(`Resultado del equipo ${j} (victoria/empate/derrota) en la fecha ${i + 1}:`);

        const puntos = calcularPuntos(resultado);

        let encontrado = false;
        for (const eq of equipos) {
          if (eq.nombre === equipo) {
            eq.puntos += puntos;
            encontrado = true;
            break;
          }
        }

        if (!encontrado) {
          equipos.push({ nombre: equipo, puntos: puntos });
        }
      }
    }

    
    equipos.sort((a, b) => b.puntos - a.puntos);

   
    console.log("Ranking de equipos:");
    for (let i = 0; i < equipos.length; i++) {
      console.log(`${i + 1}. ${equipos[i].nombre}: ${equipos[i].puntos} puntos`);
    }



