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
  { transform: 'translateY(-2200px)'},
  { transform: 'translateY()'}
      ], {
        // timing options
        duration: 1000
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
        + createCard('25/11', 'sexta', createVersus('wales', '07:00', 'Gales', 'iran', 'Irã')
        + createVersus('qatar', '10:00', 'Catar', 'senegal', 'Senegal')
        + createVersus('netherlands', '13:00', 'Holanda', 'ecuador', 'Equador')
        + createVersus('england', '16:00', 'Inglaterra', 'unitedstates', 'Estados Unidos da América'))
