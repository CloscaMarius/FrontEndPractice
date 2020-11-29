//Ex1
//Scrieti o functie multiplyByTen care atunci cand o apelam cu console.log(multiplyByTen(6)) sa avem 60 rezultat.
function multiplyByTen (number){
    return (number*10);
  }
  console.log(multiplyByTen(6));
  
  //Ex2
  //Scrieti o functie myNameIs care sa ia un singur parametru si cand o apelam cu numele nostru sa returneze "Numele meu este ___"
  function myNameIs (name) {
    return "Numele meu este " + name;
  }
  console.log(myNameIs("Marius"));
  myNameIs("Marius");
  
  //Ex3 
  //Scrieti o functie care sa transforme un numar in string.
  function convert (number) {
    //return number.toString();
    return '' + number;
  }
  console.log(convert(62));
  
  //Ex4 
  //Scrieti o functie care sa returneze patratul numarului pe care-l dam ca si argument.
  function squareNumber (number) {
    return (number*number);
  }
  console.log(squareNumber (4));
  
  //Ex5
  //Scrieti o functie numita aflaViitorul care sa aiba 4 parametrii -  numele jobului, compania, in cati ani, si cati bani - ar trebui sa returnam "Eu voi fi job in x ani la compania y si voi face z bani pe ora"
  //Chemati/invocati/apelati acea functie de 3 ori cu diferite argumente.
  function aflaViitorul (jobName, companyName, years, money){
    return ("Eu voi fi "+ jobName +" in "+ years + " ani la compania " + companyName + " si voi face " + money + " pe ora");
  }
  console.log(aflaViitorul("job", "y", "x", "z"));
  
  //Ex6
  //Scrieti o functie care sa calculeze cati ani are o pisica in ani pisicesti avand in vedere ca 1 an de om = 7 ani de pisica.
  // functia are 1 singur parametru - deci va accepta 1 singur argument.
  // Rezultatul trebuie sa fie "Pisica mea are xx ani in ani pisicesti"
  //BONUS - adaugati un alt parametru care reprezinta varsta noastra si obtinem la final varsta pisciii relatata la varsta noastra.
  function yearsConversion (catAge, myAge){
    var dif = myAge-catAge*7
    console.log("Pisica mea are " + catAge*7 + " ani in ani pisicesti");
    console.log("Diferenta este de " + dif + " ani");
  }
  yearsConversion(3, 25);
  
  //Ex7
  // Vreau sa scriu o functie ce sa calculeze pentru urmatorii X ani cate cani de cafea voi bea
  // Functia accepta ca parametrii years si coffePerDay.
  // Rezultatul va fi "In urmatorii X ani voi bea in total Y cani de cafea"
  function coffee (years, coffePerDay){
    var coffePerYear = 365 * coffePerDay;
    var totalCoffee = coffePerYear * years;
    return "In urmatorii " + years + " ani voi bea in total " + totalCoffee + " cani de cafea"
  }
  console.log(coffee(3, 2));
  
  //EX8 BONUS 
  // Faceti 2 functii una calculateCelsiusToFarenheit() si una calculateFarenheitToCelsius() unde sa facem conversia dintre celsius si farenhite.
  // rezultatul trebuie sa fie "X grade Celsius reprezinta Y grade Farenhite"
  // folositi https://www.mathsisfun.com/temperature-conversion.html ca si referinta pentru calcul.
  function calculateCelsiusToFahrenheit(celsius){
    var celsiusToFahrenheit = celsius/5*9+32;
    return celsius + " grade Celsius reprezinta " + celsiusToFahrenheit + " grade Fahrenheit"
    //return celsiusToFahrenheit;
  }
  console.log(calculateCelsiusToFahrenheit(25));
  
  function calculateFahrenheitToCelsius(fahrenheit){
    var fahrenheitToCelsius = (fahrenheit-32)*5/9;
    return fahrenheit + " grade Fahrenheit reprezinta " + fahrenheitToCelsius + " grade Celsius"
    //return fahrenheitToCelsius;
  }
  console.log(calculateFahrenheitToCelsius(77));