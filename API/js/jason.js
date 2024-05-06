// JavaScript Object Notation

const user = {
    id : 1,
    name : "Gorib Hasan",
    job : "Developer"
}

const jason_string = JSON.stringify(user);
console.log(jason_string);
console.log(typeof jason_string);

const userObj = JSON.parse(jason_string);
console.log(userObj);