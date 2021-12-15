function loginFn(event) {
    event.preventDefault();

    var userName = document.getElementById('userName').value;
    var userPass = document.getElementById('userPass').value;

    console.log("Username: ", userName);
    console.log("Password: ", userPass);

    if (userName === 'Adam' && userPass === 'Test123') {
        alert('Logowanie poprawne!');
    } else {
        alert('Nice try! :)');
    }
}