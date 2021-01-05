// 1. calculati media aritmetica a unui array de numere

var numbers = [1, 2, 3, 4, 5];
var sum = 0;
for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
var mean = sum / numbers.length;
console.log(mean);

/*2. avand un array cu numere, valori boolene, obiejcte si stringuri calculati suma tuturor
numerelor. Ignorati toate valorile care nu sunt de tip numar. */

var object = new Object();
var anything = [1, 7, 9, 6, "string", "anotherString", 3, 6, true, 8, false, object];
var sum1 = 0;
for (i = 0; i < anything.length; i++) {
    if (typeof (anything[i]) == "number") {
        sum1 += anything[i];
    }
}
console.log(sum1);

// 3. creati un program care afiseaza primele 20 numere din sirul lui Fibonacci

var f0 = 0;
var f1 = 1;
var next = 0;
var n = 20;
for (i = 1; i <= n; i++) {
    console.log("number " + i + ": " + f0);
    next = f0 + f1;
    f0 = f1;
    f1 = next;
}

/* 4. Creati un program cu care tineti evidenta cartilor citite si cartilor pe care doriti sa le cititi in
viitor. */

/* 4.1. creati un array cu mai multe obiecte. Fiecare obiect reprezinta o carte si are
proprietati pentru titlu, autor si daca aceasta carte este citita sau nu */

var book = function (title, author, isItRead) {
    this.title = title;
    this.author = author;
    this.isItRead = isItRead;
}

var book1 = new book("Anna Karenina", "Lev Tolstoi", false);
var book2 = new book("War and Peace", "Lev Tolstoi", true);
var book3 = new book("The Idiot", "Feodor Dostoievski", true);
var book4 = new book("Crime and Punishment", "Feodor Dostoievski", false);
var book5 = new book("The Brothers Karamazov", "Feodor Dostoievski", false);

var library = [book1, book2, book3, book4, book5];

/* 4.2. iterati prin aceasta colectie de carti si afisati la consola titlul si autorul fiecarei carti.
De exemplu pentru “The Hobbit” a lui J.R.R. Tolkien ar trebui sa afisati “The Hobbit by
J.R.R Tolkien” */

// 4.3. modificati programul astfel incat sa se afiseze si daca o carte a fost citita sau nu

for (i = 0; i < library.length; i++) {
    if (library[i].isItRead) {
        console.log(library[i].title + " by " + library[i].author + " - it has been read");
    } else {
        console.log(library[i].title + " by " + library[i].author + " - it has not been read");
    }

}