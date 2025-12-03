/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

/* convertirAMilisegundos(dias, horas, minutos, segundos)
dias = 1, horas = 0, minutos = 0, segundos = 0
86400000 ms */

function convertirAMilisegundos(dias, horas, minutos, segundos) {
    const msPorSegundo = 1000;
    const msPorMinuto = 60 * msPorSegundo;
    const msPorHora = 60 * msPorMinuto;
    const msPorDia = 24 * msPorHora;

    const total = (dias * msPorDia) + (horas * msPorHora) + (minutos * msPorMinuto) + (segundos * msPorSegundo);
    return total;
}

console.log(convertirAMilisegundos(1, 0, 0, 0));

