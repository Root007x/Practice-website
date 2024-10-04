// jason

const student = {
    name : "sakib khan",
    age : 32,
    movies : ["king Khan", "dhakar mastan"]
}

const studentJSON = JSON.stringify(student); // object to JSON
console.log(studentJSON);

const studentObject = JSON.parse(studentJSON); // JSON to Object
console.log(studentObject);

const keys = Object.keys(student);
const values = Object.values(student);

console.log(keys, values);