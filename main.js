function createVersus(teamicon1, time, team1, teamicon2, team2) {
    return `
        <li>
            <img src="./assets/icon-${teamicon1}.svg" alt="Bandeira da ${team1}" title="${team1}">
            <strong>${time}</strong>
            <img src="./assets/icon-${teamicon2}.svg" alt="Bandeira do ${team2}" title="${team2}">
        </li>
    `
}

function createCard(date, day, versus) {
    return `
        <div class="card">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${versus}
            </ul>
        </div>
    `
}

function changeSiteLayoutGreen() {
    document.getElementById("body").classList.remove('blue', 'yellow');
    document.getElementById("body").classList.add('green');
}

function changeSiteLayoutBlue() {
    document.getElementById("body").classList.remove('green', 'yellow');
    document.getElementById("body").classList.add('blue');
}

function changeSiteLayoutYellow() {
    document.getElementById("body").classList.remove('green', 'blue');
    document.getElementById("body").classList.add('yellow');
}

function imageTransitionAnimation() {
    document.querySelector("#body").animate([
        // keyframes
  { opacity: 0 },
  { opacity: 1 }
      ], {
        // timing options
        duration: 600
      });

}

document.querySelector("#cards").innerHTML =
        createCard('24/11', 'quinta', createVersus('switzerland', '07:00', 'Suiça', 'cameroon', 'Camarões')
        + createVersus('uruguay', '10:00', 'Uruguai', 'southkorea', 'Coréia do Sul')
        + createVersus('portugal', '13:00', 'Portugal', 'ghana', 'Gana')
        + createVersus('brazil', '16:00', 'Brasil', 'serbia', 'Sérvia'))
        + createCard('25/11', 'sexta', createVersus('wales', '07:00', 'Gales', 'iran', 'Irã')
        + createVersus('qatar', '10:00', 'Catar', 'senegal', 'Senegal')
        + createVersus('netherlands', '13:00', 'Holanda', 'ecuador', 'Equador')
        + createVersus('england', '16:00', 'Inglaterra', 'unitedstates', 'Estados Unidos da América'))
        + createCard('26/11', 'sábado', createVersus('tunisia', '07:00', 'Tunisia', 'australia', 'Austrália')
        + createVersus('poland', '10:00', 'Polônia', 'saudiarabia', 'Arábia Saudita')
        + createVersus('france', '13:00', 'França', 'denmark', 'Dinamarca')
        + createVersus('argentina', '16:00', 'Argentina', 'mexico', 'México'))
        + createCard('27/11', 'domingo', createVersus('japan', '07:00', 'Japãp', 'costarica', 'Costa Rica')
        + createVersus('belgium', '10:00', 'Bélgica', 'morocco', 'Marrocos')
        + createVersus('croatia', '13:00', 'Croácia', 'canada', 'Canadá')
        + createVersus('spain', '16:00', 'Espanha', 'germany', 'Alemanha'))
