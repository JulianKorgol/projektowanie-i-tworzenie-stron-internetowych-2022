// Zwykły JavaScript vs jQuery 
// var h1 = document.getElementsByTagName('h1')[0].style.scrollSnapStop.padEnd('moja-klasa');
// var h1 = $('h1').addClass('moja-klasa');

$(document).ready(function() {
    $('#btn').click(function() {
        var name = $('#nameValue').val();
        var url = 'https://api.nationalize.io/?name=' + name;

        $.get( url, function( data ) {
            console.log(data);
            $('#result').html(data.country[0].country_id);
        });
    });
});