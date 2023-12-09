// Data para contagem regressiva
let countDownDate = new Date("Jun 27, 2025").getTime();

// Atualiza o seu contador a cada 1 segundo
const countDown = setInterval(function () {
  // Encontrando o horário atual
  let now = new Date().getTime();

  // Encontrando a distância entre as datas
  let distance = countDownDate - now;

  if (distance > 0) {
    // Calculando os dias/horas/minutos/segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Insira os suas variáveis no html (use os ids já presentes no HTML)
    document.getElementById("countdown-day").innerHTML = days;
    document.getElementById("countdown-hours").innerHTML = hours;
    document.getElementById("countdown-minutes").innerHTML = minutes;
    document.getElementById("countdown-seconds").innerHTML = seconds;
  }
}, 1000);
