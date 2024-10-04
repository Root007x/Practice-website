const myLoader = () =>{
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if(success <= 0.5){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}

myLoader()
.then(data => console.log("resolve data", data))
.catch(err => console.log("rejected with value", err))


async function load_data() { // same like fetch API
    const res = await fetch();
    const data = await res.json()
    console.log(data)
}

// 35-6