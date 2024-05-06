const load_users = () => {
    fetch("https://randomuser.me/api/?results=10")
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    const users_container = document.getElementById('user-container');
    for(const user of users){
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <h3>User Name</h3>
            <p>Email : ${user.email}</p>
            <p>User Location : ${user.location.city} ${user.location.country}</p>
        `;

        users_container.appendChild(userDiv);
    }
}

load_users();