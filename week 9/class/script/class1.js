// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = () => {
    setTimeout(() =>
        console.log('1'), 400
    )

}

const func2 = () => {
    setTimeout(
        () => console.log('2'),300
        )

}

const func3 = () => {
    setTimeout(
        () => console.log('3'),100
        )

}

const func4 = () => {
    setTimeout(
        () => console.log('4'),500
        )

}

const func5 = () => {
    setTimeout(
        () => console.log('5'),200
        )

}


func1();
func2();
func3();
func4();
func5();