$(document).ready(function () {
    const inputs = document.getElementsByTagName('input');
    const inputsCount = inputs.length;
    const pattern =  ['A','a','Ą','ą','B','b','C','c','Ć','ć','D','d','E','e','Ę','ę','F','f','G','g','H','h','I','i','J','j','K','k','L','l','Ł','ł','M','m','N','n','Ń','ń','O','o','Ó','ó','P','p','R','r','S','s','Ś','ś','T','t','U','u','W','w','Y','y','Z','z','Ź','ź','Ż','ż'];
    const chances = [false, false, false, false, false, false];
    let points = 0;

    const blockLine = (lineId) => {
        const row = document.getElementsByClassName('row')[lineId];

        if (!row) {
            return;
        }

        const inputs = row.children;
        const inputsCount = inputs.length;

        for(let i = 0; i < inputsCount; i++) {
            const input = inputs[i];

            input.disabled = true;
            input.style.background = '#787c7e';
        }

        if (lineId === 5) gameEnd();
    }

    const activateLine = (lineId) => {
        const row = document.getElementsByClassName('row')[lineId];

        if (!row) {
            return;
        }

        const inputs = row.children;
        const input = inputs[0];

        input.focus();
    }

    const unLock = (lineId) => {
        const row = document.getElementsByClassName('row')[lineId];

        if (!row) {
            return;
        }

        const inputs = row.children;
        const inputsCount = inputs.length;

        for(let i = 0; i < inputsCount; i++) {
            const input = inputs[i];

            input.disabled = false;
            input.style.background = 'white';
        }
    }

    const resetLine = (lineId) => {
        const row = document.getElementsByClassName('row')[lineId];

        if (!row) {
            return;
        }

        const inputs = row.children;
        const inputsCount = inputs.length;

        for(let i = 0; i < inputsCount; i++) {
            const input = inputs[i];

            input.value = "";
        }
    }

    function addPoint(status) {
        if (status === 'ok') {
            points++;
        } else {
            points = points - 1;
        }
        document.getElementById("Points").innerHTML = points;
    }

    const gameEnd = () => {
        alert("Wygrałeś! Miałeś: " + points + " punktów.")
        for(let i = 0; i < inputsCount; i++) {
            resetLine(i)
            chances[i] = false
        }
        unLock(0)
        points = -1;
    }

    const submitLine = () => {
        let breakLoop = false;

        chances.forEach((chance, index) => {
            if (!breakLoop && !chance) {
                breakLoop = true;

                const row = document.getElementsByClassName('row')[index];

                const inputs = row.children;
                const inputsCount = inputs.length;

                let word = '';

                for(let i = 0; i < inputsCount; i++) {
                    const char = inputs[i].value;

                    word += char;
                }

                if(word.length === 5) {
                    const data = { word };

                    $.post('/api/check', data)
                    .then(response => {
                        console.log(response);
                        if (response === 'no') {
                            resetLine(index*1);
                            addPoint('no');
                        } else if (response === 'ok') {
                            chances[index] = true;
                            blockLine(index);
                            activateLine(index+1);
                            unLock(index+1);
                            addPoint('ok');
                        } else {
                            console.log('Wystąpił błąd.')

                        }
                    });
                }
            }
        });
    }

    for(let i = 0; i < inputsCount; i++) {
        const input = inputs[i];

        input.addEventListener('keypress', (e)=> {
            const key = e.key;

            if(key === 'Enter') {
                submitLine()
                return;
            }

            const match = pattern.includes(key);
            if(match) {
                input.value = key;

                if (input.nextElementSibling) {
                    input.nextElementSibling.focus();
                }
            } else {
                input.value = '';
            }
        });
    };
});