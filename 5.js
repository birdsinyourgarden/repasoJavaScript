/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

/* factorial(5) // 120
factorial(0) // 1 */

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(0)); 