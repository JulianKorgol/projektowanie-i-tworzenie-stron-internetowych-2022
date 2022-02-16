// Można to dostosować do swojego kodu.
function checkWin() {
    const result = wins.find((win) => {
        if (
            moves[win[0]] !== null &&
            moves[win[0]] === moves[win[1]] &&
            moves[win[1]] === moves[win[2]]
        )
            return true;
        else return false;
    });
    if (result !== undefined) {
        return true;
    }
}

//array.find - szuka elementu w tablicy
//array.map - przekształca elementy tablicy
//array.filter - filtruje elementy tablicy