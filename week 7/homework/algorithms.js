//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

function protectMail(mail) {
    return mail.substring(0, 4) + "..." + mail.substring(mail.indexOf("@"), mail.length);
}
console.log("Ex1: " + protectMail("ovidiu.grigoras@test.com"));

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"

function toUpperCase(string) {
    var myArray = string.toLowerCase().split(' ');
    for (var i = 0; i < myArray.length; i++) {
        myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].substring(1);
    }
    return myArray.join(' ');

}
console.log("Ex2: " + toUpperCase("i am superman"));

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

function switchCase(string) {

    var newString = "";
    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) === string.charAt(i).toLowerCase()) {
            newString += string.charAt(i).toUpperCase();
        } else {
            newString += string.charAt(i).toLowerCase();
        }

    }
    return newString;
}
console.log("Ex3: " + switchCase("xxXyYzZZ"));

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

function concatenate(string, number) {
    var newString = "";
    for (i = 0; i < number; i++) {
        newString += string;
    }
    return newString;
}
console.log("Ex4: " + concatenate("Wantsome", 2));

//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
function isPalindrome(string) {
    var same = 0;
    var diff = 0;
    for (i = 0; i < string.length / 2; i++) {
        if (string.charAt(i) === string.charAt(string.length - 1 - i)) {
            same++;
        } else {
            diff++;
        }
    }
    if (same > diff && diff <= 1) {
        return true;
    } else {
        return false;
    }
}
console.log("Ex5: " + isPalindrome("level"));
console.log("Ex5: " + isPalindrome("levels"));

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care 
//contine ca si elemente cele mai mari numere din fiecare array
function getBiggest(matrix) {
    var result = new Array();
    for (i = 0; i < matrix.length; i++) {
        matrix[i].sort();
        result.push(matrix[i][matrix.length - 1]);
    }
    return result;
}
var matrix = [[4, 6, 2], [1, 2, 3], [9, 1, 3]];
console.log("Ex6: " + getBiggest(matrix));

//Ex7
// Implementati o functie care face reverse la un string
function reverseString(string) {
    var newString = "";
    for (i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}
console.log("Ex7: " + reverseString("sternocleidomastoidian"));

//Ex8
// Implementati o functie care calculeaza factorialul unui numar
function factorial(number) {
    var fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    return fact;
}
console.log("Ex8: " + factorial(5));

//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma
function finishingString(firstString, lastString) {
    var size = firstString.length - 1;
    for (i = lastString.length - 1; i >= 0; i--) {
        if (lastString[i] !== firstString[size]) {
            return false;
        }
        size--;
    }
    return true;
}
console.log("Ex9: " + finishingString("acetilsalicilic", "salicilic"));
//or
console.log("Ex9.1: " + "acetilsalicilic".endsWith("salicilic"));


//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care 
//trece testul specificat

/*function divisibleBy3(array) {
    var myArray = new Array();
    for (i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            myArray.push(array[i]);
        }
    }
    return myArray;
}
function firstDivisibleNumber(array, condFunc) {
    array = condFunc;
    return array[0];
}*/

function divisibleBy3(element) {
    if (element % 3 === 0) {
        return true;
    }
    return false;
}
function divisibleBy2(element) {
    if (element % 2 === 0) {
        return true;
    }
    return false;
}

function firstDivisibleNumber(array, condFunc) {
    var myArray = new Array();
    for (i = 0; i < array.length; i++) {
        if (condFunc(array[i])) {
            myArray.push(array[i]);
        }
    }
    return myArray[0];
}

var array = [1, 2, 9, 4, 5, 6];
console.log("Ex10: " + firstDivisibleNumber(array, divisibleBy3));
console.log("Ex10: " + firstDivisibleNumber(array, divisibleBy2));

//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea 
//string
function hasAllChar(firstString, secondString) {
    for (i = 0; i < secondString.length; i++) {
        if (firstString.indexOf(secondString[i]) === -1) {
            return false;
        }

    }
    return true;
}
console.log("Ex11: " + hasAllChar("caracter", "rac"));
console.log("Ex11: " + hasAllChar("caracter", "raci"));
// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana 
//cand intalneste elementul cu valoarea specificata

function getToNumber(array, number) {

    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (array[i] === number) {
            break;
        }
    }
}
var array = [1, 2, 3, 4, 5, 6, 7, 8];
var number = 6;
console.log("Ex12: ")
getToNumber(array, number);

// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
function deleteFalse(array) {

    // for (i = 0; i < array.length; i++) {
    //     if (array[i] === false || array[i] === null || array[i] === 0 || array[i] === '' || array[i] === undefined || array[i] === NaN) {
    //         array.splice(i, 1);
    //     }
    // }
    // return array;

    return array.filter(Boolean);
}
var array = [false, 4, 6, "string", true, 0, '', undefined, NaN];
console.log("Ex13: " + deleteFalse(array));


// Ex 14
// Scrieti o functie care repeta un string de n ori specificate
function repeatString(string, number) {
    for (i = 1; i <= number; i++) {
        console.log(string + " repeated " + i + " times ");
    }
}
console.log("Ex14: ")
repeatString("string", 5);