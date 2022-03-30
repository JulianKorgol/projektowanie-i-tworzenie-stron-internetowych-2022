// // var tylko w funkcji
// var name = 'Julian';
// const nameFN = function() {
//     var name = 'Julian';
//
//     if (true) {
//         const v = 'blabla';
//     }
// }
//
// console.log(name)
//
//
// // Const i Let mają zasięg blokowy
// const name1 = 'Julian'; // Const blokuję typ zmiennej, nie możemy jej nadpisać.
// let name2 = 'Julian';
//
//
// const apiPrefix = 'api';
// const usersUrl = '/${apiPrefix}/users';
// const adminUrl = '/${apiPrefix}/admin';
//
// console.log(usersUrl);
// console.log(adminUrl);
//
// //Let jest jak Var, ale ma krótszt zasięg.
//
// //Consta trudniej nadpisać, jest bezpieczeniejszy.
//
//
// const user = 'Bartek';
// const test = '
//     <p>Hello! ${user}</p>
//     <div>
//        <p>Welcone!</p>
//     </div>
// '
//
// document.getElementsByTagNameNS('app').innerHTML = text;
//


// const sayHello = () => {
//     return '<p> Say Hello!</p>'
// }
//
// class Human {
//     constructor() {
//         this.name = name;
//     }
//     sayName() { //Prototyp
//         return 'Hi! ${this.name}';
//     }
// }
//
// const human = new Human('Ola');
// const modernHuman = new Human('Adam');
//
// console.log(human);
// console.log(modernHuman);
//
// const text = '
//     <p>Hello! ${human.name}</p>
//     <div>
//         <p>${human.say()}</p>
//     </div>
// ';
// const cars = ['AUDI', 'BMW', 'PORSHE'];
//
// const cars = [a1, a2, a3] = cars;
//
// const cars2 = ['VW', ...cars];
// console.log(cars2);
//
// console.log(a1);
//
// cons

// const human = {
//     name: 'Julian',
//     age: '33',
//     city: 'Warsaw'
// }
//
// const { age } = human;
//
// console.log(age)


const list1 = ['Adam', 'Jakub', 'Julian'];
const list2 = ['Siema', 'Jął', "TAK"];

let col1Str = '';
let col2Str = '';

const insertElem = (elem) => {
    source += source + '<p>${elem}</p>';
}

list1.map((el) => {
    insertElem(el, col1Str);
})

list2.map((el) => {
    insertElem(el, col2Str);
})

document.getElementsById('col-1').innerHTML = col1Str;
document.getElementsById('col-2').innerHTML = col2Str;