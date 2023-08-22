alert("bienvenido a muebles comfort")
let  costoApartamento = parseFloat(prompt("ingrese costo apartamento"))
let tipoInmueble 
do {
    console.log("tipoInmueble")
    console.log("usado")
    console.log("nuevo")
    tipoInmueble = parseInt(prompt("ingrese el tipo de tipo Inmueble (1 usado)(2 nuevo)"))
} while (tipoInmueble !==1 && tipoInmueble !==2);

let comisionImobiliaria 
if (tipoInmueble !==1)
    comisionImobiliaria = costoApartamento * 0.05
else
    comisionImobiliaria = costoApartamento * 0.10

let total = costoApartamento + comisionImobiliaria
alert("el total es de: " + total)   
const valorPropietario = costoApartamento - comisionInmobiliaria;
const valorInmobiliaria = comisionInmobiliaria;

alert("el valor del propietario es de: " + valorPropietario)
console.log
alert("gracias por usar el programa")
