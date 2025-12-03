/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

/* comparar(str1, str2)
ejemplo de salida: 
out1: h
out2:

comparar("abcd", "bcef")
out1: ad
out2: ef

comparar("murciélago", "lagartija")
out1: murciéo
out2: tj
*/ 

function comparar(str1, str2) {
    let out1 = "";
    let out2 = "";

    for (let i = 0; i < str1.length; i++) {
        if (!str2.includes(str1[i])) {
            out1 += str1[i];
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (!str1.includes(str2[i])) {
            out2 += str2[i];
        }
    }

    console.log("out1:", out1);
    console.log("out2:", out2);
}

comparar("abcd", "bcef"); 
comparar("murciélago", "lagartija");