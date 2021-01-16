//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()
const moveLetters = function (string) {

    return string.split('')
        .map(x => x.charCodeAt() + 1)
        .map(x => String.fromCharCode(x))
        .reduce((a, b) => a + b);

}
console.log('Ex1: ');
console.log(moveLetters('hello'));
console.log(moveLetters('abcxy'));
console.log();

// ex2
// Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together sometime') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"
let changeWordCase = function (string) {
    let stringArray = string.split(' ');
    return stringArray.map(function (x, i) {
        if (i % 2 === 0) {
            return x.toUpperCase();
        }
        return x.toLowerCase();
    }).join(' ');
}
console.log('Ex2: ');
console.log(changeWordCase('hey ppl, lets learn javascript together sometime'));
console.log(changeWordCase('a b c d e f g'));
console.log();

// ex3
// Faceti astfel incat toate variabilele de mai jos sa returneze ceea ce zice numele
const arr = [
    { name: 'sasha', sex: 'f', age: 7, species: 'cat' },
    { name: 'john', sex: 'm', age: 133, species: 'human' },
    { name: 'titus', sex: 'm', age: 62, species: 'human' },
    { name: 'kalifa', sex: 'f', age: 255, species: 'human' },
    { name: 'oreo', sex: 'm', age: 21, species: 'cat' },
];

console.log('Ex3: ');
let allCats = arr.filter(x => x.species === 'cat');
let allHumans = arr.filter(x => x.species === 'human');
let allFemales = arr.filter(x => x.sex === 'f');
let totalOfAllAges = arr.map(x => x.age).reduce((a, b) => a + b);
let averageAgeOfCats = allCats.map(x => x.age).reduce((a, b) => a + b) / allCats.length;
let averageAgeOfHumans = allHumans.map(x => x.age).reduce((a, b) => a + b) / allHumans.length;
let avgLengthOfNames = arr.map(x => x.name.length).reduce((a, b) => a + b) / arr.length;
console.log();



//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului
const square = (x) => { return Math.pow(x, 2) }
const double = (x) => { return x * 2 }
const composedValue = (function1, function2, value) => {
    return function1(function2(value));
}
console.log(composedValue(square, double, 5));
console.log(composedValue(double, square, 5));
console.log(composedValue(square, square, 5));

//ex.2
//faceti o functie 'compose' care atunci cand va fi apelata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc
const compose = (function1, function2, number) => {
    return function1(function2(number));
}
const myFunction = (x) => {
    return compose(square, double, x);
};
console.log(myFunction(5));
console.log(myFunction(10));

//ex.3
//faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5

const isOdd = (array) => {
    return array.filter(x => x % 2 === 1);
}

const find = (array, function1) => {
    return function1(array);
}

console.log(find([1, 2, 3, 4, 5], isOdd));