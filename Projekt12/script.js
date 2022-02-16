var moves = [null, null, null, null, null, null, null, null, null];
var kolejka = 1;
var player  = 1;
var winner1 = 0;
var winner2 = 0;
var game = 'active';

function move(event) {
    var id = event.target.id;
    if (id && game === 'active') {
        // Pole gry zostało kliknięte.
        if (player  === 1 && !moves[id]) {
            moves[id] = 'X';
            document.getElementById(id).innerHTML = 'X';
            player  = 2;
            document.getElementById('playermove').innerHTML = "Aktualny ruch: Gracz 2";
            checkWin()
            return;
        }
        if (player  === 2 && !moves[id]) {
            moves[id] = 'O';
            document.getElementById(id).innerHTML = 'O';
            player  = 1;
            document.getElementById('playermove').innerHTML = "Aktualny ruch: Gracz 1";
            checkWin()
            return;
        }
    }
}

function checkWin() {
    if (player === 1) {
        winner = 2;
    } else {
        winner = 1;
    }
    var i;
    for(i = 0;i < 8; i++) {
        listaToCheck = wins[i];
        if (moves[listaToCheck[0]]) {
            if ((moves[listaToCheck[0]] === moves[listaToCheck[1]] && moves[listaToCheck[1]] === moves[listaToCheck[2]])) {
                if (winner === 1) {
                    //    Jeśli wygra player1
                    winner1 += 1;
                    document.getElementById('winner1').innerHTML = "Zwycięstw: " + winner1;
                    document.getElementById('gameWin').innerHTML = "Wygrał Player1";
                    // Kolejka +1
                    kolejka += 1;
                    document.getElementById('moveNumber').innerHTML = "Aktualna kolejka: " + kolejka;
                    game = 'noactive'
                } else {
                    //    Jeśli wygra player2
                    winner2 += 1;
                    document.getElementById('winner2').innerHTML = "Zwycięstw: " + winner2;
                    document.getElementById('gameWin').innerHTML = "Wygrał Player2";
                    // Kolejka +1
                    kolejka += 1;
                    document.getElementById('moveNumber').innerHTML = "Aktualna kolejka: " + kolejka;
                    game = 'noactive'
                }
            }
        }
    }
}

const wins = [
    [0,1,2], // pozioma
    [3,4,5], // pozioma
    [6,7,8], // pozioma
    [0,3,6], // pionowa
    [1,4,7], // pionowa
    [2,5,8], // pionowa
    [0,4,8], // skośna
    [2,4,6], // skośna
];

function reset() {
    kolejka = 1;
    winner1 = 0;
    winner2 = 0;
    setDefault()
}

function keepPlaying() {
    game = 'active'
    setDefault()
}

function setDefault() {
    document.getElementById('gameWin').innerHTML = "";
    document.getElementById('moveNumber').innerHTML = "Aktualna kolejka: " + kolejka;
    document.getElementById('playermove').innerHTML = "Aktualny ruch: Gracz 1";
    moves = [null, null, null, null, null, null, null, null, null];
    var step;
    for (step = 0; step < 9; step++) {
        id = step
        document.getElementById(id).innerHTML = '';
    }
    player  = 1;
}