console.log(1)
console.log(2)
// setTimeout(() => { // only run one time
//     console.log(3)
// }, 4000)
console.log(4)
console.log(5)

let = num = 0;

const clockId = setInterval(() => { // i will continuosly run
                    num++;
                    console.log(num, clockId)
                    if(num == 3) clearInterval(clockId) // to stop
                }, 2000)