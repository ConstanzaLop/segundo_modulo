//Ejercicio 4 - TP2 -----------------------------------------------------------------------------------

// let numeros = [];
// let continuar = true;

// while (continuar) {
//   let input = prompt("Introduce un número:");

//   if (input === null) {
//     continuar = false;
//   } else if (isNaN(input)) {
//     alert("Error: lo introducido no es un número.");
//   } else {
//     numeros.push(Number(input));
//   }
// }

// let suma = 0;
// for (let numero of numeros) {
//   suma += numero;
// }

// alert(`La suma de los números introducidos es ${suma}.`);




//Ejercicio 8 - TP2 -----------------------------------------------------------------------------------

// let num = parseInt(prompt("Ingresa un número menor o igual a 50 para finalizar piramide: "));
// let piramide = "";

// if(num <= 50) {
//   for(let i = 1; i <= num; i++) {
//     piramide += i;
//     console.log(piramide);
//   }
// } else {
//   console.log("El número ingresado es mayor a 50.");
// }



//Ejercicio 1 - TP3 -----------------------------------------------------------------------------------

// let meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre"
//   ];
  
//   let lista = "<ul>";
//   for (let i = 0; i < meses.length; i++) {
//     lista += "<li>" + meses[i] + "</li>";
//   }
//   lista += "</ul>";
//   document.write("<h1>Lista de Meses</h1>")
//   document.write(lista);
  


//Ejercicio 2 - TP3 -----------------------------------------------------------------------------------

let ciudades = [];

while (true) {
  let ciudad = prompt("Ingrese el nombre de una ciudad:");

  //si selecciona cancelar, salir del bucle
  if (ciudad === null) {
    break;
  }

  //ciudad ingresada al arreglo
  ciudades.push(ciudad);
}

document.write("<h1>Arreglo de Ciudades</h1>");

//longitud del arreglo
document.write("La longitud del arreglo es: " + ciudades.length + "<br>");

//posiciones primera, tercera y última
document.write("El primer ítem del arreglo es: " + ciudades[0] + "<br>");
document.write("El tercer ítem del arreglo es: " + ciudades[2] + "<br>");
document.write("El último ítem del arreglo es: " + ciudades[ciudades.length - 1] + "<br>");

//París en la última posición del arreglo
ciudades.push("París");

//segunda posición
document.write("El segundo ítem del arreglo es: " + ciudades[1] + "<br>");

// Sustituir segunda posición por Barcelona
ciudades[1] = "Barcelona";

// Mostrar el arreglo final por pantalla
// document.write(´${ciudades}´)
document.write("El arreglo final es: París ");




//Ejercicio 4 - TP3 -----------------------------------------------------------------------------------

// function esPar() {
//   let numero = prompt("Ingrese un número entero:");
//   if(numero % 2 === 0) {
//     document.write("El número es par");
//   } else {
//     document.write("El número es impar");
//   }
// }




//Ejercicio 6 - TP3 -----------------------------------------------------------------------------------

// let ladoA = parseFloat(prompt("Ingrese el valor del lado A del rectángulo:"));
// let ladoB = parseFloat(prompt("Ingrese el valor del lado B del rectángulo:"));

// function calcularPerimetro(a, b) {
//   let perimetro = 2 * (a + b);
//   return perimetro;
// }

// let perimetro = calcularPerimetro(ladoA, ladoB);

// document.write("El perímetro del rectángulo es: " + perimetro);
