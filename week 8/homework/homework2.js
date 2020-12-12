//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/
const sum = (number = 1) => {
    let firstNo = 0;
    for (i = 1; i <= number; i++) {
        firstNo += i;
    }
    return firstNo;
}
console.log('Ex1: ' + sum("abc"));
console.log('Ex1: ' + sum(7));
console.log('Ex1: ' + sum(3));

/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/
const longestWord = string => {
    if(typeof string !== 'string'){
        return 'Error!';
    }
    return string.split(' ').sort((a, b) => b.length - a.length)[0];
}
console.log();
console.log('Ex2: ' + longestWord('cel mai lung cuvant'));
console.log('Ex2: ' + longestWord('i am a string'));
console.log('Ex2: ' + longestWord(3));

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/
const reverseString = string => {
    if(typeof string !== 'string'){
        return 'Error!';
    }
    let reversedString = '';
    for (i = string.length; i >= 0; i--) {
        reversedString += string.charAt(i);
    }
    return reversedString;
}
console.log();
console.log('Ex3: ' + reverseString('word'));

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/

const replaceWord = string => {
    if(typeof string !== 'string'){
        return 'Error!';
    }
    let newString = '';
    for (i = 0; i < string.length; i++) {
        if (string[i] === 'z') {
            newString += 'a';
          continue;
        }
        if (string[i] === 'Z') {
            newString += 'A';
          continue;
        }
        newString += String.fromCharCode(string.charCodeAt(i) + 1);
    }
    return newString;
}
console.log();
console.log('Ex4: ' + replaceWord('abcdez'));

/* const incrementChars = stringToConvert => {
	let transformedString = "";
  for (i=0; i<stringToConvert.length; i++) {
  	if (stringToConvert[i] === 'z') {
    	transformedString += 'a';
      continue;
    }
    if (stringToConvert[i] === 'Z') {
    	transformedString += 'A';
      continue;
    }
  	const currentCharCode = stringToConvert.charCodeAt(i);
    const newChar = String.fromCharCode(currentCharCode + 1);
    transformedString += newChar;
  }
  return transformedString;
}
const transformed = incrementChars("abcdzZ");
console.log(transformed); */


/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/

const convertToTime = number => {
    if(typeof number !== 'number'){
        return 'Error!';
    }
    return (number < 60) ? '0:' + number : (number / 60).toFixed(0) + ':' + number % 60;
}
console.log();
console.log('Ex5: ' + convertToTime(64));
console.log('Ex5: ' + convertToTime(32));
console.log('Ex5: ' + convertToTime(562));
console.log('Ex5: ' + convertToTime('abc'));

/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/
const sortedChars = string => {
    if(typeof string !== 'string'){
        return 'Error!';
    }

    return string.split('').sort().join('');
}
console.log();
console.log('Ex6: ' + sortedChars('iouacfb'));
console.log('Ex6: ' + sortedChars(3));

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/
const verifyPlus = string => {
    if(typeof string !== 'string'){
        return 'Error!';
    }
    if (string.startsWith('+') && string.endsWith('+')) {
        for (i = 1 ; i < string.length; i += 2) {
            if(string.charAt(i)==='+'){
                return false;
            }
        }
        return true;
    }
    return false;
}
console.log();
console.log('Ex7: ' + verifyPlus("+a+b+c+"));
console.log('Ex7: ' + verifyPlus("+ab+bb+c+"));
console.log('Ex7: ' + verifyPlus(44));