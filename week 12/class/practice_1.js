  // The Car and the Truck class have similar behavior and properties.
  // Rewrite them in a way such that they share those properties.

  var Vehicle = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
    this.setDriver = function(driver){
        this.driver = driver;
    }
    this.setSpeed = function(speed){
        this.speed = speed;
    }

  };

  var Car = function(driver) {
    // this.driver = driver;
    // this.speed = 0;
    // this.drive = function(mph) {
    //   this.speed = mph;
    //   return this.driver + ' driving at ' + mph + ' miles per hour';
    // };
  };

  var Truck = function(driver) {
    //this.driver = driver;
    // this.speed = 0;
    this.cargo = [];
    // this.drive = function(mph) {
    //   this.speed = mph;
    //   return this.driver + ' driving at ' + mph + ' miles per hour';
    // };

    this.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };

    this.unloadCargo = function() {
      return this.cargo.pop();
    };
  };

  Car.prototype = new Vehicle();
  Truck.prototype = new Vehicle();

  const truck_1 = new Truck('Alex');
  truck_1.setDriver('Alex');
  truck_1.setSpeed(40);
  console.log(truck_1.drive(40));
  truck_1.drive(40);
  truck_1.loadCargo('drinks')

  console.log(truck_1);

  const honda = new Car('Barrichello')
  honda.setDriver('Barrichello');
  honda.setSpeed(110);
  honda.drive(110);

  console.log(honda);