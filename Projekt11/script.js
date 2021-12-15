$(document).ready(function() {
    var url = 'https://randomuser.me/api/';

    $.get( url, function( data ) {
        console.log(data);
        $('#imie').html(data.results[0].name.first + ' ' + data.results[0].name.last);
        $('#kraj').html(data.results[0].location.country);
        $('#picture').attr('src', data.results[0].picture.large);
        $('#e-mail').html(data.results[0].email);
        $('#phone').html(data.results[0].phone);
        $('#user').html(data.results[0].login.username);
        $('#age').html(data.results[0].dob.age);
        if (data.results[0].gender == "male") {
            $('#programista').html("Jestem programistą!");
        } else {
            $('#programista').html("Jestem programistką!");
        }
    });
});