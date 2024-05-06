const num = [2,6,5,4,3];
const output = [];

for(const number of num){
    output.push(number*2);
}

const make_double = num.map(num => num * 2);

// console.log(make_double);

const friends = ['tom','bom','rom','dom'];

const first_letter = friends.map(n => n[0]);
const frnd_size = friends.map(n => n.length);
console.log(first_letter);
console.log(frnd_size);