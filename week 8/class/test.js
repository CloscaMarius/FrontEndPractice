function masina() {
	let km = 0;

	function parcurge(nrKm) {
  	km = km + nrKm;
  }
  
  function afiseaza() {
  	console.log(km);
  }
  
  function reset() {
  	km = 0;
  }
  
  return {
  	parcurge,
    afiseaza,
    reset
  }
}

const bmw = masina();

//1
bmw.parcurge(100);

//2
bmw.parcurge(50);

//3
bmw.afiseaza();

bmw.reset();

//4
bmw.parcurge(250);
bmw.afiseaza();