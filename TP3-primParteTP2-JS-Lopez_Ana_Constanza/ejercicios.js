//Ejercicio 1 ------------------------------------------------------------------------------------------------------

// let edad = prompt("Ingrese su edad:");

// if (isNaN(edad)) {
//   alert("La edad ingresada no es un número válido."); 
// } else if (edad >= 18) { 
//   alert("Ya puede conducir.");
// } else {
//   alert("Todavía no puede conducir.");
// }




//Ejercicio 2 ------------------------------------------------------------------------------------------------------

// let nota = prompt("Ingresa tu nota (de 0 a 10)");

// if (isNaN(nota) || nota < 0 || nota > 10) {
//   alert("Introduce un número válido");
// } else if (nota >= 0 && nota <= 2) {
//   alert("Muy deficiente");
// } else if (nota >= 3 && nota <= 4) {
//   alert("Insuficiente");
// } else if (nota >= 5 && nota <= 6) {
//   alert("Suficiente");
// } else if (nota === 7) {
//   alert("Bien");
// } else if (nota >= 8 && nota <= 9) {
//   alert("Notable");
// } else {
//   alert("Sobresaliente");
// }



//Ejercicio 11 ------------------------------------------------------------------------------------------------------

// const nombre1 = prompt("Introduce el primer nombre:");
// const edad1 = parseInt(prompt("Introduce la primera edad:"));
// const nombre2 = prompt("Introduce el segundo nombre:");
// const edad2 = parseInt(prompt("Introduce la segunda edad:"));
// const nombre3 = prompt("Introduce el tercer nombre:");
// const edad3 = parseInt(prompt("Introduce la tercera edad:"));

// const mayor = nombre1;
// if (edad2 > edad1 && edad2 > edad3) {
//   mayor = nombre2;
// } else if (edad3 > edad1 && edad3 > edad2) {
//   mayor = nombre3;
// }

// document.write("El mayor es: " + mayor);




//Ejercicio 12 ------------------------------------------------------------------------------------------------------

// const numeroAleatorio = Math.floor(Math.random() * 99) + 1;
// document.write("El número aleatorio es: " + numeroAleatorio);



//Ejercicio 13 ------------------------------------------------------------------------------------------------------

const texto = prompt("Por favor, ingrese un texto:");
const textoEnMayusculas = texto.toUpperCase();
document.write(textoEnMayusculas);

