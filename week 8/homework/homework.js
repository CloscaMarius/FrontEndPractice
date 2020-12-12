//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi inmulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

function operations(firstNo, secondNo) {

    function sum() {
        return firstNo + secondNo;
    }

    if (firstNo === secondNo) {
        return sum() * 5;
    }
    return sum();
}
console.log("Ex1: " + operations(10, 5));
console.log("Ex1: " + operations(10, 10));

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

function verify(firstNo, secondNo) {

    function sum() {
        return firstNo + secondNo;
    }

    if (firstNo === 30 && secondNo === 30 || sum() === 30) {
        return true;
    }

    return false;
}
console.log();
console.log("Ex2: " + verify(30, 30));
console.log("Ex2: " + verify(15, 15));
console.log("Ex2: " + verify(10, 15));

//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function checkString(string) {
    if (string === null) {
        return 'JS';
    }
    if (string.charAt(0) === 'J' && string.charAt(1) === 'S') {
        return string;
    }
    return 'JS' + string;

}
console.log();
console.log("Ex3: " + checkString('JSisAwsome'));
console.log("Ex3: " + checkString('isEasy'));
console.log("Ex3: " + checkString(null));

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

function removeDuplicates(input) {
    let variable = input.toString().split('');
    for (i = 0; i < variable.length; i++) {
        if (variable[i] === variable[i + 1]) {
            variable.splice(i, 1);
        }
    }
    if (typeof (input) === 'number') {
        return Number.parseInt(variable.join(""));
    }
    return variable.join("");
}
console.log();
console.log("Ex4: " + removeDuplicates('aabcdeef'));
console.log("Ex4: " + removeDuplicates(122334));

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'
function findLongestString(input) {
    let stringArr = input.split(" ");
    let longestString = '';
    for (i = 1; i < stringArr.length; i++) {
        if (stringArr[i].length > stringArr[i - 1].length) {
            longestString = stringArr[i];
        }
    }
    return longestString;
}
console.log();
console.log("Ex5: " + findLongestString('Wantsome is Awsomeeee today'));

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

function asterix() {
    let ast = "";
    function add() {
        ast += '*';
    }
    function print() {
        console.log(ast);
    }
    return {
        add,
        print
    }
}
console.log();
console.log("Ex6: ");
const newAsterix = asterix();
newAsterix.add();
newAsterix.print();
newAsterix.add();
newAsterix.print();
newAsterix.add();
newAsterix.print();
newAsterix.add();
newAsterix.print();
newAsterix.add();
newAsterix.print();

//or

function astx() {
    let ast = "";
    for (i = 0; i < 5; i++) {
        ast += '*'
        console.log(ast);
    }
}
console.log();
console.log("Ex6.1: ");
astx();

//ex7
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i]);
        }
    }
    //console.log(negativeNumbers);
    return negativeNumbers;
}
console.log();
console.log("Ex7: " + extractNegativeNumbers([1, 2, -5, 4, -6]));

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2
function calculate(firstNo, secondNo, operator) {
    if (operator === 'add') {
        return firstNo + secondNo;
    }
    if (operator === 'substract') {
        return firstNo - secondNo;
    }
    if (operator === 'multiply') {
        return firstNo * secondNo;
    }
    if (operator === 'divide') {
        return firstNo / secondNo;
    }
}
console.log();
console.log("Ex8: " + calculate(2, 5, "add"));
console.log("Ex8: " + calculate(10, 8, "substract"));
console.log("Ex8: " + calculate(2, 5, "multiply"));
console.log("Ex8: " + calculate(6, 3, "divide"));

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7
function isDiv(number) {
    if (number % 3 === 0 & number % 5 === 0) {
        return 'BOTH';
    }
    if (number % 5 === 0) {
        return 'FIVE';
    }
    if (number % 3 === 0) {
        return 'THREE';
    }
    return number;
}
console.log();
console.log("Ex9: " + isDiv(15));
console.log("Ex9: " + isDiv(9));
console.log("Ex9: " + isDiv(7));
console.log("Ex9: " + isDiv(5));

//Master exercises
//Ex10
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

function dayAndTime() {
    let d = new Date();
    function day() {
        const weekday = ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"];
        console.log("Azi este : " + weekday[d.getDay()]);
    }
    function hour() {

        const h = d.getHours();
        const m = d.getMinutes();
        const s = d.getSeconds();
        if (h > 11) {
            console.log("Ora este : " + h + " PM : " + m + " : " + s);
        } else {
            console.log("Ora este : " + h + " AM : " + m + " : " + s);
        }

    }
    return { day, hour };
}
console.log();
console.log("Ex10: ");
const today = dayAndTime();
today.day();
today.hour();

//ex11
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

function validPin(input) {
    let stringArr = input.split("");
    if (stringArr.length === 4) {
        for (i = 0; i < stringArr.length; i++) {
            if (parseInt(stringArr[i]) <= 9) {
                return true;
            }
            return false;
        }
    }
    return false;
}
console.log();
console.log("Ex11: " + validPin("1234"));
console.log("Ex11: " + validPin("12345"));
console.log("Ex11: " + validPin("z23f"));

//ex12
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

function removeVowels(string) {
    return string.replace(/[aeiou]/ig, '')
}
console.log();
console.log("Ex12: " + removeVowels("Hey I am developer"));

//ex13
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false
function isSquareNumber(number) {
    return number > 0 && Math.sqrt(number) % 1 === 0;
}
console.log();
console.log("Ex13: " + isSquareNumber(-1));
console.log("Ex13: " + isSquareNumber(25));
console.log("Ex13: " + isSquareNumber(3));

//ex14
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true
function isAnagram(firstString, secondString) {

    let firstStringArr = firstString.toLowerCase().replace(/ /g, "").split("");
    let secondStringArr = secondString.toLowerCase().replace(/ /g, "").split("");

    if (firstStringArr.length !== secondStringArr.length) {
        return false;
    }

    firstStringArr.sort();
    secondStringArr.sort();

    for (i = 0; i < firstStringArr.length; i++) {
        if (firstStringArr[i] != secondStringArr[i]) {
            return false;
        }
    }
    return true;
}
console.log();
console.log("Ex14: " + isAnagram("School master", "The class room"));
console.log("Ex14: " + isAnagram("silent", "listen"));