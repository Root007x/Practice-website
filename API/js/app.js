function load_data(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
}

function load_users(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display_user(data))
}


function display_user(data){
    console.log(data);
}