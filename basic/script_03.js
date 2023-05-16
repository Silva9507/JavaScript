// Ingresar datos por pantalla


let userName = prompt("Ingresa tu nombre");
let age = prompt("Ingresa tu edad");
let salary = prompt("Ingresa tu salario");
let married = prompt("Estas casado/a?");
const numberId = prompt("Ingresa tu documento");
let celNumber = prompt("Ingresa tu numero de telefono");

console.log(userName, age, married, numberId, celNumber);
alert(
  userName +
    " " +
    age +
    " " +
    married +
    " " +
    numberId +
    " " +
    celNumber +
    " " +
    salary
);
// concatenacion se utiliza el mas y comillas
/**
 * tipos de datos
 * string: "cadena de texto, escrito entre"
 * int: entero, tipo de dato numerico, no utiliza comillas
 * boolean: solo puede tener dos valores ture - false
 */
