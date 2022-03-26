var moves = [null, null, null, null, null, null, null, null, null];
var kolejka = 1;
var player  = 1;
var winner1 = 0;
var winner2 = 0;
var game = 'active';

kolejka = localStorage.getItem('kolejka');
player = localStorage.getItem('player');
winner1 = localStorage.getItem('winner1');
winner2 = localStorage.getItem('winner2');
if (kolejka === null)  {
    kolejka = 1;
    document.getElementById('winner1').innerHTML = "Zwycięstw: ";
    document.getElementById('winner2').innerHTML = "Zwycięstw: ";
}
else {
    document.getElementById('winner1').innerHTML = winner1 ? "Zwycięstw: " + winner1 : '';
    document.getElementById('winner2').innerHTML = winner2 ? "Zwycięstw: " + winner2 : '';
}
setDefault()

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
                    kolejka = Number(kolejka);
                    winner1 = Number(winner1);
                    winner1 += 1;
                    document.getElementById('winner1').innerHTML = "Zwycięstw: " + (winner1 ? winner1 : 0);
                    document.getElementById('gameWin').innerHTML = "Wygrał Player1";
                    // Kolejka +1
                    kolejka += 1;
                    document.getElementById('moveNumber').innerHTML = "Aktualna kolejka: " + kolejka;
                    game = 'noactive'
                    setTimeout(function() {
                        alert("Wygrał Player1");
                    }, 500);
                } else {
                    //    Jeśli wygra player2
                    winner2 = Number(winner2);
                    winner2 += 1;
                    document.getElementById('winner2').innerHTML = "Zwycięstw: " + (winner2 ? winner2 : 0);
                    document.getElementById('gameWin').innerHTML = "Wygrał Player2";
                    // Kolejka +1
                    kolejka = Number(kolejka);
                    kolejka += 1;
                    document.getElementById('moveNumber').innerHTML = "Aktualna kolejka: " + kolejka;
                    game = 'noactive'
                    setTimeout(function() {
                        alert("Wygrał Player2");
                    }, 500);
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
    winner1 = 0;
    winner2 = 0;
    localStorage.removeItem('kolejka');
    localStorage.removeItem('player');
    localStorage.removeItem('winner1');
    localStorage.removeItem('winner2');
    localStorage.removeItem('game');
    kolejka = 1;
    document.getElementById('winner1').innerHTML = "Zwycięstw: ";
    document.getElementById('winner2').innerHTML = "Zwycięstw: ";
    setDefault()
}

function keepPlaying() {
    game = 'active'
    setDefault()
    saveGameToBrowser()
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

function saveGameToBrowser() {
    localStorage.setItem('kolejka', kolejka);
    localStorage.setItem('player', player);
    localStorage.setItem('winner1', winner1);
    localStorage.setItem('winner2', winner2);
    localStorage.setItem('game', game);
}