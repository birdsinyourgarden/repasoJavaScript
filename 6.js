/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

/* num = 153
num = 123 */ 

function esArmstrong(num) {
    let suma = 0;
    let numero = num;
    let n = 0;
    let temp = num;

    while (temp > 0) {
        n++;
        temp = Math.floor(temp / 10);
    }

    temp = num;
    while (temp > 0) {
        let digito = temp % 10;
        let potencia = 1;

        for (let i = 0; i < n; i++) {
            potencia *= digito;
        }

        suma += potencia;
        temp = Math.floor(temp / 10);
    }

    return suma === num;
}

console.log("153 es Armstrong:", esArmstrong(153));
console.log("123 es Armstrong:", esArmstrong(123));