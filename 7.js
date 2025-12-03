/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

/* capitalizarPalabras(texto)
texto = "hola mundo"
Salia: Hola Mundo */ 

function capitalizarPalabras(texto) {
    let resultado = '';
    let nuevaPalabra = true;

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];

        if (nuevaPalabra && letra !== ' ') {
            letra = letra.toUpperCase();
            nuevaPalabra = false;
        }

        resultado += letra;

        if (letra === ' ') {
            nuevaPalabra = true;
        }
    }

    return resultado;
}

console.log(capitalizarPalabras("hola mundo"));
