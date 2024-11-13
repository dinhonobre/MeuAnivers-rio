AOS.init();

const diaDoEvento = new Date('December 23, 2024 20:00:00').getTime();

// Contador de tempo
const countdown = setInterval(() => {
    const agora = new Date().getTime();
    const tempoRestante = diaDoEvento - agora;

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (tempoRestante < 0) {
        clearInterval(countdown);
        document.getElementById('contador').innerHTML = "O evento começou!";
    }
}, 1000);
