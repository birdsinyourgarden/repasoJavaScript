/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function reverseText(text) {
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  return reversed;
}

console.log(reverseText("Hola mundo"));

// Otra forma de hacerlo 

function reverseText(text) {
  return text.split('').reverse().join('');
}

console.log(reverseText("Hola mundo"));