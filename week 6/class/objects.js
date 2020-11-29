// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name
var car = {
  name: "Tesla",
  wheels: 4
};
console.log(car);
car.name = "Mercedes";
console.log(car);
delete (car.name);
console.log(car);

//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
var object = {
  proprietatea1: "Valoarea1",
  proprietatea2: "Valoarea2",
  proprietatea3: "Valoarea3",
  proprietatea4: "Valoarea4"
}
console.log(object);
var keys = Object.keys(object).toString();
console.log(keys);
var upperKeys = keys.toUpperCase();
console.log(upperKeys);
var values = Object.values(object).toString();
console.log(values);
var lowerValues = values.toLowerCase();
console.log(lowerValues);
console.log(keys.replace(/,/g, " ") + " reprezinta ceva");


//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
var obiect1 = {
  prop1: "Alba",
  prop2: "Iulia",
  prop3: function () {
    console.log(this.prop1 + " " + this.prop2);
  }
}
//console.log(obiect1);
obiect1.prop3();

//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
var house = {
  rooms: 2,
  zone: "Copou",
  animals: 0
}
console.log(house)
var newHouse = Object.assign({}, house);
console.log(newHouse);
newHouse.floor = 2;
newHouse.hasBalcony = false;
console.log(newHouse);

myHouse = {
  rooms: 3,
  zone: "Bucium",
  animals: 1
}

var otherHouse = Object.assign({}, newHouse, myHouse);
console.log(otherHouse);

// Ex5 
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
var Romania = {
  Bucharest: {
    subdivisions: 6,
    isCapital: true
  }
}
console.log(Romania);

var newKeys = Object.keys(Romania.Bucharest);
console.log(newKeys);

var newString = newKeys.join().replace(/,/g, " si ").concat(" apartin obiectului Romania.Bucharest");
console.log(newString);

//Ex6
// Avem obiectul : 
myObject = {
  name: "John",
  surname: "Applegate",
}
//Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
var myObjectSorted = Object.values(myObject).sort();
console.log(myObjectSorted);

//Ex7 
//Faceti o functie constructor
// Cu functia constructor creati 3 obiecte cu valori diferite
// Pentru toate valorile din acele obiecte transformatile in litere mari.

function Person(name, age, eyeColor) {
  this.name = name.toUpperCase();
  this.age = age;
  this.eyeColor = eyeColor.toUpperCase();
}

var person1 = new Person("Mark", 26, "hazel");
var person2 = new Person("John", 50, "blue");
var person3 = new Person("Frank", 32, "green");


console.log(person1);
console.log(person2);
console.log(person3);