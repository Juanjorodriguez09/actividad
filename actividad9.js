

 let votosAnaMaria = 0;
let votosDiego = 0;

for (let i = 1; i <= 10; i++) {
    console.log(`Votante ${i}:`);
    const voto = prompt("Ingrese su voto (Ana Maria Suarez / Diego Acero):");

    if (voto === "Ana Maria Suarez") {
        votosAnaMaria++;
    } else if (voto === "Diego Acero") {
        votosDiego++;
    } else {
        console.log("Opción de voto no válida");
        i--; // 
    }
}

let ganador = "";
let perdedor = "";

if (votosAnaMaria > votosDiego) {
    ganador = "Ana Maria Suarez";
    perdedor = "Diego Acero";
} else if (votosDiego > votosAnaMaria) {
    ganador = "Diego Acero";
    perdedor = "Ana Maria Suarez";
} else {
    console.log("Hubo un empate en la votación");
}


if (ganador !== "") {
    console.log(`El ganador de la votación es: ${ganador}`);
    console.log(`El perdedor de la votación es: ${perdedor}`);
}