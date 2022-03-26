function calculate() {
    var number1 = Number(document.getElementById('number1').value);
    var number2 = Number(document.getElementById('number2').value);

    if (isNaN(number1) || isNaN(number2)) {
        alert('Nieprawidłowa wartość');
        return;
    }

    var type = document.getElementById('operation').value;
    var result = 0;

    if (type === '+') {
        result = number1 + number2;
    }
    if (type === '-') {
        result = number1 - number2;
    }
    if (type === '*') {
        result = number1 * number2;
    }
    if (type === '/') {
        result = number1 / number2;
    }

    var output = document.getElementById('result');

    output.innerHTML = result;
}

