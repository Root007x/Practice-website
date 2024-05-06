const first = {a:2};
const second = {a:2};

// if(first == second){
//     console.log("Matched");
// }
// else{
//     console.log("Different");
// }

// do not use this method to compare to object

const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

if(firstString === secondString){
    console.log("Same");
}
else{
    console.log("Not Same");
}


35-6