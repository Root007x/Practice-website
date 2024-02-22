document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === 'boss@gmail.com' && password === 'boss'){
        console.log("Valid");
    }
    else{
        console.log("Invalid");
    }
})