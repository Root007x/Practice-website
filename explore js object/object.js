// Create object using object literals

const player = {};

player.name = "Nirob";
player.speciality = "batsman";

player.bat = function(){
    console.log("Swing your bat");
}

// console.log(player);
// player.bat();

const student = {
    name : "Hasan",
    job : "Kai unday",
    ball : function(){
        console.log("trow the ball");
    },
    salary : 12222
}

// object constructor
const person = new Object();
console.log(person);

// object create method
const item = Object.create(null)

// console.log(item);

const atel = Object.create(student);
console.log(atel.name);

// class

class Person {
    name = "abul";
    address = "shodorghat";
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(33);
console.log(person1);

// funciton 
function Car(model,price){
    this.model = model;
    this.price = price;
}

const tesla = new Car("hello",20000);
console.log(tesla);