
let puntajeTotal = 0;


function evaluarPregunta(pregunta, respuestaCorrecta) {
    console.log(pregunta);
    const respuestaUsuario = prompt("Ingrese su respuesta (verdadero/falso):").toLowerCase();
    
    if (respuestaUsuario === respuestaCorrecta) {
        puntajeTotal += 10;
        console.log("Respuesta correcta!\n");
    } else {
        console.log("Respuesta incorrecta.\n");
    }
}


evaluarPregunta("1. JavaScript es un lenguaje de programación.", "verdadero");
evaluarPregunta("2. HTML significa 'Hyper Text Markup Language'.", "verdadero");
evaluarPregunta("3. CSS se utiliza para el diseño visual de páginas web.", "verdadero");
evaluarPregunta("4. Java y JavaScript son lo mismo.", "falso");
evaluarPregunta("5. OpenAI desarrolló el lenguaje de programación Python.", "falso");

console.log(`Cantidad de respuestas correctas: ${puntajeTotal / 10}`);
console.log(`Puntaje total obtenido: ${puntajeTotal}`);
