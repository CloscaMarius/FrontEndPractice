var Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.setName = function (name) {
    this.name = name;
}

Person.prototype.setAge = function (age) {
    this.age = age;
}



//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]

var Trainer = function (name, age) { };

Trainer.prototype = new Person();
Trainer.prototype.teach = function (subject) {
    return this.name + ' is now teaching ' + subject;
}

const newPerson = new Person('Mihai', 23);
/* newPerson.setName('Mihai');
newPerson.setAge(23); */

const newTrainer = new Trainer('Andrei', 44);
newTrainer.setName('Andrei');
newTrainer.setAge(44);

console.log(newPerson);
console.log(newTrainer);
console.log(newTrainer.teach('yoga'));
