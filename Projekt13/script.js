function start() {
    console.log('Test');
    var students = [];
    var list = document.getElementById('list').children;

    for (i = 0; i < list.length; i++) {
        console.dir(list[i].children[0].checked)
        console.dir(i + '. ' + list[i].children[1].innerText)
    }
}