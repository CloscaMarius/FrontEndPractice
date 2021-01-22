//1. Creati o clasa Animal care sa aiba in constructor name si weight
//2. Creati urmatoarele metode: eatFood, sleep, wakingUp - fiecare metoda o sa returneze un string '$name is eating' '$name is sleeping' '$name is waking up'
//3. Creati o clasa noua care sa faca extend la clasa Animal si sa ia numele si weight-ul de la el(tip: super) - ex: class Elephant, class Lion etc
//4. Adaugati 4 metode noi:
//   walking - $name is walking
//   rage - $name is rageing 
//   showBehaviour - returnati metodele eatFood si rage
//   dailyRoutine - returnati metodele weakingUp, rage, eatFood si sleep

//5. Creati o constanta noua din clasa cu numele de animal pe care ati scris-o mai sus( NU DIN clasa Animal ci din clasa Elephant, Monkey, Lion etc etc);
//6. Accesati toate cele 4 metode de pe noul animal. 

class Animal {

    name;
    weight;

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eatFood() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }

    wakingUp() {
        console.log(`${this.name} is waking up`);
    }
}

class Lion extends Animal {

    constructor(name, weight) {
        super(name, weight);
    }

    walking() {
        console.log(`${this.name} is walking`);
    }

    rage() {
        console.log(`${this.name} is rageing`);
    }

    get showBehaviour() {
        super.eatFood()
        this.rage()
    }

    get dailyRoutine(){
        super.wakingUp()
        this.rage()
        super.eatFood()
        super.sleep()
    }
}

const newLion = new Lion('Mars', 43);

newLion.eatFood();
newLion.walking();
newLion.rage();
newLion.showBehaviour;
newLion.dailyRoutine;