// triunghi.constructor;                 // Triangle(a, b, c)   
// forma.isPrototypeOf(triunghi);        // true
// triunghi.getPerimeter();              // 48
// triunghi.getType();                   // "triunghi"


//cand dau console.log(triunghi.constructor) tre sa printeze Triangle(a,b,c)

const forma = function () { };


const Triangle = function (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

forma.prototype = Object.create(Triangle.prototype);

Triangle.prototype.setA = function (a) {
    this.a = a;
}
Triangle.prototype.setB = function (b) {
    this.b = b;
}
Triangle.prototype.setC = function (c) {
    this.c = c;
}

Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
}

Triangle.prototype.getType = function () {
    return 'triunghi';
}

const triunghi = new forma();
triunghi.setA(16);
triunghi.setB(16);
triunghi.setC(16);

console.log(triunghi.constructor);
console.log(forma.prototype.isPrototypeOf(triunghi));
console.log(triunghi.getPerimeter());
console.log(triunghi.getType());
