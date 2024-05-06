function load_users2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display_user(data))
}


function display_user(data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}