const bottle = {color: "yellow",price : 50,capacity : 1};

// const keys = Object.keys(bottle);
// console.log(keys);

// const values = Object.values(bottle);

// console.log(values);

// const pair = Object.entries(bottle);

// console.log(pair);

console.log(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.capacity;
bottle.capacity = 2;
bottle.height = 22;
console.log(bottle);

35-4


