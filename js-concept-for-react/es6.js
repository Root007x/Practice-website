let num = [43,45,67,4,3];
const student = {
    name : "Hasa",
    age : 32,
    movies : ['king','boss','ass']
}

const about = `My name is ${student.name}, My age is ${student.age}, I love to watch ${student.movies[1]}`;
console.log(about);

// arrow function

const func = () => 55;
const func2 = num => num + 64;
const even = x => x % 2 == 0;
const addThree = (x,y,z) => x + y + z;

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator
const newNumbers = num;

num.push(99);
console.log(newNumbers)

const againNew = [...num];

num.push(100);
console.log(againNew);
console.log(num);