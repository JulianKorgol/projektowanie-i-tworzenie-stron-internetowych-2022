const check = (req) => {
    const word = req.body.word;
    const passwords = ['TEMAT', 'CHYBA', 'MOICH', 'KONTO', 'FOTKA', 'CYTAT', 'GŁOWA', 'KUBEK', 'OCZKO', 'DRZWI', 'TAŚMA'];

    let result = word.toUpperCase();

    let res = 'no';
    let warunek = false;

    var dzisiajD = new Date();
    var dzisiajM = new Date();
    dzisiajD.getDay();
    dzisiajM.getMonth();

    PreSlowoNaDzis = dzisiajD / dzisiajM
    PreSlowoNaDzis = Math.round(PreSlowoNaDzis > 11 ? PreSlowoNaDzis / 3 : false);
    slowoNaDzis = passwords[PreSlowoNaDzis]

    warunek = slowoNaDzis === result

    // console.error(slowoNaDzis)

    // if (passwords.includes(result)) {
    if (warunek) {
        res = 'ok';
    }

    return res;
}

module.exports = {
	check: check
};