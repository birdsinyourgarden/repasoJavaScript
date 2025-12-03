/* Santa ha recibido una lista de regalos, pero algunos están defectuosos. Un regalo es defectuoso si su nombre contiene el carácter #.

Ayuda a Santa escribiendo una función que reciba una lista de nombres de regalos y devuelva una nueva lista que solo contenga los regalos sin defectos.

Ejemplos
const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)
// ['car', 'ball']

const gifts2 = ['#broken', '#rusty']
const good2 = filterGifts(gifts2)
console.log(good2)
// []

const gifts3 = []
const good3 = filterGifts(gifts3)
console.log(good3)
// [] */

/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
function filterGifts(gifts) {
  const result = [];

  for (let i = 0; i < gifts.length; i++) {
    const gift = gifts[i];
    let hasHash = false;

    for (let j = 0; j < gift.length; j++) {
      if (gift[j] === '#') {
        hasHash = true;
        break;
      }
    }

    if (!hasHash) {
      result.push(gift);
    }
  }

  return result;
}

// otra forma de hacerlo 

function filterGifts(gifts) {
  return gifts.filter(gift => !gift.includes('#'));
}





const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)

const gifts2 = ['#broken', '#rusty']
const good2 = filterGifts(gifts2)
console.log(good2)

const gifts3 = []
const good3 = filterGifts(gifts3)
console.log(good3)