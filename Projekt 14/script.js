// console.log("HELLO JAVASCRIPT");
//
// var cars = ['Audi', 'BMW', 'Mercedes'];
// var myName = 'Julian';
//
// console.dir(cars);
// console.dir(myName);
//
// cars.map(function(car){
//     console.log(car);
// });
//
// myName.map(function(name){
//     console.log(name);
// });

// WINDOW
// -KONSTRUKTORY
// -- STRING
// -- NUMBER
// -- OBJECT
// -- ARRAY
// -- FUNCTION
// -- BOOLEAN

//Najważniejszy obiekt w JavaScript WINDOW



// console.log(Array);
// var cars = ['Audi', 'BMW'];
//
// var cars2 = new Array();
//
// cars.push('Audi');
// cars2.push('BMW');
//
// console.log(cars2);
//
//
// var cars = ['Audi', 'BMW']
// var cars2 = ['Fiat', 'Ferrari'];
//
// console.log(cars==cars2);
// console.log(cars1.portotype == cars2.portotype);

//Izolatoriun
// function() {
//
// }

// Moduły tworzy się po to, byśmy nie nadpisywali plików.
// Przez to, że mamy jeden plik index.html zmienne z różnych plików zapisują się w jednym WINDOW.
// Dzięki czemu możemy potem operować na zmiennych z różnych plików.

// Funkcje są modułami, są izolowane.

// Bez var leci od razu do WINDOW

// calculate = (function () {
//     return {
//         addNumbers: function (n1, n2) {
//             return n1 + n2;
//         }
//     }
// })();

// W konsoli calculate.addNumbers(2,4)
// Właśnie stworzyliśmy własną bibliotekę
// Biblioteka została zapisana w WINDOW




// HARDCORE
// function Human(name) { // Human z dużej, bo to konstruktor
//     this.name = name;
// }
// Human.prototype.sayHello = function () {
//     console.log('Hi ' + this.name);
// }
//
// var adam = new Human('Adam');
// var karol = new Human('Karol');
//
// console.log(adam == karol)
// console.log(adam.prototype == karol.prototype);
//
// adam.sayHello();

// window.Array.prototype.sayHello = function () { //Nadpisanie JavaScriptu
//     console.log('Siema jestem Twoją Tablicą!;')
// }

window.Array.prototype.extraPush = function (el) {
    this.push('Extra ' + el);
};


var cars = ['BMW', 'AUDI'];

cars.sayHello();