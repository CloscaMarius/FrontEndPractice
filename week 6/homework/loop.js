for (i = 1; i <= 100; i++) {
    if (i % 2 === 0)
        console.log(i);
}

for (i = 2; i <= 100; i += 2) {
    console.log(i);
}

var i = 1;
while (i <= 100) {
    console.log(i);
    i += 2;
}

var i = 0;
do {
    if (i % 2 == 0) {
        console.log(i + " este nr par");
    }
    else {
        console.log(i + " este nr impar");
    }

    i++;
} while (i < 100);