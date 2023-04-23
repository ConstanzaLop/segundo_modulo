//Ejercicio 4 --------------------------------------------------------------------------------------------------
// let nombreUsuario = prompt("¿Cuál es tu nombre?");
// document.write ("Hola " + nombreUsuario);



//Ejercicio 5 --------------------------------------------------------------------------------------------------
// const num1 = parseInt(prompt("Introduce el primer número:"));
// const num2 = parseInt(prompt("Introduce el segundo número:"));

// document.write (`La suma de ${num1} y ${num2} es ${num1 + num2}`);




//Ejercicio 6 --------------------------------------------------------------------------------------------------
// let num1 = parseInt(prompt("Introduce el primer número:"));
// let num2 = parseInt(prompt("Introduce el segundo número:"));

// if (num1 > num2) {
//  document.write("El número mayor es " + num1);
// } else if (num2 > num1) {
//  document.write("El número mayor es " + num2);
// } else {
//  document.write("Los dos números son iguales");
// }



//Ejercicio 7 --------------------------------------------------------------------------------------------------
// const numero1 = prompt("Introduce el primer número:");
// const numero2 = prompt("Introduce el segundo número:");
// const numero3 = prompt("Introduce el tercer número:");

// const num1 = Number(numero1);
// const num2 = Number(numero2);
// const num3 = Number(numero3);

// let mayor = num1;
// if (num2 > mayor) {
//  mayor = num2;
// }
// if (num3 > mayor) {
//  mayor = num3;
// }

// document.write(`El número mayor es: ${mayor}`);




// //Ejercicio 8 --------------------------------------------------------------------------------------------------
const numero = parseInt(prompt("Introduce un número:"));

if (numero % 2 === 0) {
  console.log(`${numero} es divisible por 2.`);
} else {
  console.log(`${numero} no es divisible por 2.`);
}
