const numbers = [12,54,65,3,54];

for(const number of numbers){
    // console.log(number);
}

// for of loop can't be used with object
const bottle = {color: "yellow",price : 50,capacity : 1};

const keys = Object.keys(bottle);

// for(const key of keys){
//     console.log(key,":", bottle[key]);
// }

// for in loop
// for(const key in bottle){
//     console.log(key,":",bottle[key]);
// }

// advanced
for(const [key,value] of Object.entries(bottle)){
    console.log(key,value);
}

35-5