const check = (req) => {
    const word = req.body.word;
    const passwords = ['TEMAT', 'CHYBA', 'MOICH', 'KONTO', 'FOTKA', 'CYTAT', 'GŁOWA', 'KUBEK', 'OCZKO', 'DRZWI', 'TAŚMA'];

    let result = word.toUpperCase();

    let res = 'no';

    if (passwords.includes(result)) {
        res = 'ok';
    }

    return res;
}

module.exports = {
	check: check
};