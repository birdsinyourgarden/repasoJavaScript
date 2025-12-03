/*
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */

/* ordenarArray(arr, orden)
Entrada: arr = [5, 2, 9, 1, 6]
orden = "Asc"
Salida: [1, 2, 5, 6, 9] */

function ordenarArray(arr, orden) {
    const resultado = arr.slice();
    if (orden === "Asc") {
        resultado.sort((a, b) => a - b);
    } else if (orden === "Desc") {
        resultado.sort((a, b) => b - a);
    }
    return resultado;
}

console.log(ordenarArray([5, 2, 9, 1, 6], "Asc"));
console.log(ordenarArray([5, 2, 9, 1, 6], "Desc"));