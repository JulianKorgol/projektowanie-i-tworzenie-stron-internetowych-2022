$(document).ready(function() {
    var url = 'https://randomuser.me/api/';

    $.get( url, function( data ) {
        console.log(data);
        $('#name').html(data.results[0].name.first + ' ' + data.results[0].name.last);
        $('#headname').html(data.results[0].name.first + ' ' + data.results[0].name.last);
        $('#country').html(data.results[0].location.country);
        $('#picture').attr('src', data.results[0].picture.large);
        $('#e-mail').html(data.results[0].email);
        $('#minecraft').html(data.results[0].login.username);
        $('#age').html(data.results[0].dob.age);
        if (data.results[0].gender == "male") {
            $('#programmer').html("Jestem programistą!");
        } else {
            $('#programmer').html("Jestem programistką!");
        }
    });
});