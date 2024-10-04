// 1. array destructuring

const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

const [x,y] = numbers;

console.log(x,y);

function getValues(num1, num2){
    const nums = [num1, num2];
    return nums;
}

console.log(getValues(30,30));

const strudent = {
    name : ['boss', 'hasan']
}

const [k,z] = strudent.name;
console.log(k,z);

// object destructureing

const {name,age} = {name : 'alu', age : 145};
console.log(name,age);