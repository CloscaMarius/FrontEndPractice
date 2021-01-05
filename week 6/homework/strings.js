// 1. Scrieti o functie care verifica daca un input este sau nu de tip string. 
function is_string(input) {
    var boolean = typeof (input) === 'string';
    return boolean;
};
console.log("'tree' is string: " + is_string("tree"));

// 2. Scrieti o functie care verifica daca un string este gol sau nu.
function is_Blank(input) {
    return input === "";
};
console.log("'' is blank: " + is_Blank(""));
console.log("'abc' is blank: " + is_Blank("abc"));

// 3. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:
function string_to_array(input) {
    return input.trim().split(/\s+/);
};
console.log(string_to_array("Robin Singh"));

// 4. Scrieti o functie care transforma un string in forma abreviata:
function abbrev_name(input) {
    var str = input.trim();
    return str.slice(0, str.indexOf(" ") + 2) + ".";
};
console.log(abbrev_name("Robin Singh"));

// 5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):
function capitalize(input) {
    return input.replace(input.charAt(0), input.charAt(0).toUpperCase());
};
console.log(capitalize("js string exercises"));

// 6. Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:
function truncate_string(string, index) {
    return string.slice(0, index);
};
console.log(truncate_string("Robin Singh", 4));

// 7. Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu:
function isUpperCaseAt(string, index) {
    return string.charAt(index) === string.charAt(index).toUpperCase();
};
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

// 8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:
function insert(string, stringInsert, index) {
    return string.slice(0, index) + stringInsert + string.slice(index);
};
console.log(insert("We are doing some exercises.", "JavaScript ", 18));

// 9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:
function remove_first_occurrence(mainString, string) {
    return mainString.replace(string + " ", "");
};
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

// 10. Scrieti o functie care compara doua string-uri case-insensitive:
function compare_strings(firstString, secondString) {
    return firstString.toLowerCase() === secondString.toLowerCase();
};
console.log(compare_strings("a", "A"));

// 11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:
function Uncapitalize(string) {
    return string.toLowerCase();
};
console.log(Uncapitalize("Js string exercises"));

