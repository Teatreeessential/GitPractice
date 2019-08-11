function Vehicle (name, speed) {
    this.name = name;
    this.speed = speed;
}

Vehicle.prototype.drive = function (){
    console.log(this.name + '가' + this.speed + '로 달립니다.');
}


function Sedan (name, speed, boostSpeed) {
    Vehicle.apply(this, arguments);
    this.boostSpeed = boostSpeed;
}

Sedan.prototype = Object.create(Vehicle.prototype);
Sedan.prototype.construct = Sedan;
Sedan.prototype.boost = function () {
    console.log(this.name + this.boostSpeed + '로 달립니다.');
}

function Truck (name, speed, product) {
    Vehicle.apply(this, arguments);
    this.product = product;
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.construct = Truck;
Truck.prototype.load = function () {
    console.log('트럭' + this.product + '적재 합니다.');
}

let sedan = new Sedan('제네시스', 100, 180);
let truck = new Truck('포터', 80, '컴퓨터');

sedan.drive();
sedan.boost();

truck.drive();
truck.load();


