class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    details(){
        console.log("Model is "+this.name+" engine is "+this.year);
    }
}
const car2 = new Car("Pontiac Firebird", 1976);

console.log(car2.details());
class Sedan extends Car {
    
        constructor(name, year, speed){
            super(name, year);
            this.speed=speed;
        }
        info(){
            console.log(this.name+" was built "+ this.year+" and can reach this speed "+this.speed)
        }
    }

const sedan = new Sedan ("Volvo", 1945, 1000);
console.log(sedan.info());