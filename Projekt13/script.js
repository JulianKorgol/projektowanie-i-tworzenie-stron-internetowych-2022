var presents = [];


function start() {
    var list = document.getElementById('list').children;
    var los = 0;

    part2(list)
}

function part2(list) {
    for (i = 0; i < list.length; i++) {
        if (list[i].children[0].checked) {
            presents.push(list[i].children[1].innerText);
        }
    }
    logosus(presents);
    setTimeout(logosus(presents), 1000)
}

function logosus() {
    while (presents.length > 1) {
        los = Math.round(Math.random());
        if (los === 0) {
            presents = presents.splice(0, Math.floor((presents.length)/2));
        } else {
            presents = presents.splice(Math.ceil((presents.length)/2), presents.length);
        }
        answer = presents.join();
        document.getElementById('answer').innerHTML = answer;
        console.log(presents);
    }
}