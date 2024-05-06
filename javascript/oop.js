// syntactic sugar
class Instructor {
    // properties or attributes
    name; 
    designation = "web course instructor";
    team = 'web team';
    location;

    // constructor
    constructor(name,location){
        this.name = name;
        this.location = location;
    }

    // method
    startSupportSession(time){
        console.log("Hello",time);
    }
}

const obj = new Instructor("Amir","Dhaka");

console.log(obj);

obj.startSupportSession(12);

