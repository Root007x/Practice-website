const num = [1,2,3,4,5,6,7,8,10];

const ans = num.filter(number => number > 3);
const even = num.filter(number => number % 2 === 0);
console.log(ans);
console.log(even);

const five = num.find(num => num % 5 === 0); // return first only
console.log(five);