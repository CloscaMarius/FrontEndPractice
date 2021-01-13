
//1.
function capitalizeNames(arr) {
    return arr.map(x => x.substring(0, 1).toUpperCase() + x.substring(1, x.length).toLowerCase());
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
// ["John", "Jacob", "Jingleheimer", "Schmidt"]

/* 2.Scrieti codul corespunzator functiei care dubleaza fiecare element de tip valoare numerica dintr-un array specificat ca
argument */

function doubleEachNumber(arr) {

    return arr.map((x) => {
        if (typeof (x) === 'number') { return x * 2 }
        return x;
    });

}
console.log(doubleEachNumber([2, '5', 100, '100', 'blalblala'])); // [4, “5”, 200, “100”, “blalblala”]

//3.

function getPersonsNames(arr) {
    return arr.map(x => x.name + " " + x.surname);
}
console.log(getPersonsNames([
    {
        name: "Angelina",
        surname: "Jolie",
        age: 80
    },
    {
        name: "Eric",
        surname: "Jones",
        age: 27
    },
]));
// ["Angelina Jolie", "Eric Jones"]


//4.

function computeExamPass(arr) {
    return arr.map((x) => {
        if (x.grade > 4) {
            return x.name + ' ' + x.surname + ' has passed the exam'
        }
        return x.name + ' ' + x.surname + ' has not passed the exam'
    })
}
console.log(computeExamPass([
    {
        name: "Angelina",
        surname: "Jolie",
        grade: 7
    },
    {
        name: "Eric",
        surname: "Jones",
        grade: 3
    },
]));
// ["Angelina Jolie has passed the exam","Eric Jones has not passed the exam"]

//5.
function getPersonsDomElements(arr) {


    return arr.forEach((x) => {
        const div = document.querySelector('div');
        const heading1 = document.createElement('h1');
        const heading2 = document.createElement('h2');
        heading1.innerHTML = x.name + ' ' + x.surname;
        heading2.innerHTML = x.age;
        div.appendChild(heading1);
        div.appendChild(heading2);
    })

}
console.log(getPersonsDomElements([
    {
        name: "Angelina",
        surname: "Jolie",
        age: 80
    },
    {
        name: "Eric",
        surname: "Jones",
        age: 27
    },
]));
   // ["<h1>Angelina Jolie"<h1><h2>80</h2>”,“<h1>Eric Jones</h1><h2>27</h2>”]