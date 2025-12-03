/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

/* decimal = 10

El número 10 en binario es: 1010 */

let decimal = 10;
let binario = '';
let num = decimal;

while (num > 0) {
    binario = (num % 2) + binario;
    num = Math.floor(num / 2);
}

console.log("El número " + decimal + " en binario es: " + binario);