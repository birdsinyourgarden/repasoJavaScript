/*
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

/* compararArrays(arr1, arr2, buscarComunes)
Entrada: arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]
buscarComunes = true
Salida: [3, 4] */

function compararArrays(arr1, arr2, buscarComunes) {
    const resultado = [];

    for (let i = 0; i < arr1.length; i++) {
        let encontrado = false;

        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                encontrado = true;
                break;
            }
        }

        if ((buscarComunes && encontrado) || (!buscarComunes && !encontrado)) {
            resultado.push(arr1[i]);
        }
    }

    if (!buscarComunes) {
        for (let j = 0; j < arr2.length; j++) {
            let encontrado = false;

            for (let i = 0; i < arr1.length; i++) {
                if (arr2[j] === arr1[i]) {
                    encontrado = true;
                    break;
                }
            }

            if (!encontrado) {
                resultado.push(arr2[j]);
            }
        }
    }

    return resultado;
}

console.log(compararArrays([1, 2, 3, 4], [3, 4, 5, 6], true)); 
console.log(compararArrays([1, 2, 3, 4], [3, 4, 5, 6], false)); 

// Otra forma de hacerlo 

function compararArrays(arr1, arr2, buscarComunes) {
    if (buscarComunes) {
        return arr1.filter(el => arr2.includes(el));
    } else {
        const noComunesArr1 = arr1.filter(el => !arr2.includes(el));
        const noComunesArr2 = arr2.filter(el => !arr1.includes(el));
        return [...noComunesArr1, ...noComunesArr2];
    }
}

console.log(compararArrays([1, 2, 3, 4], [3, 4, 5, 6], true));
console.log(compararArrays([1, 2, 3, 4], [3, 4, 5, 6], false)); 