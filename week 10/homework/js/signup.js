
const validation = () => {
    let username = document.getElementById('username').value;
    let usernameErr = document.getElementById('usernameErr');
    /* if (username.length < 4) {
        usernameErr.style.display = 'block';
    } else {
        usernameErr.style.display = 'none';
    } */
    var reg = /^[0-9a-zA-Z]{4,}$/;
    if (!username.match(reg)) {
        usernameErr.style.display = 'block';
    } else {
        usernameErr.style.display = 'none';
    }

    let password = document.getElementById('password').value;
    let passwordErr = document.getElementById('passwordErr');

    var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{3,}$/;
    if (!password.match(reg)) {
        passwordErr.style.display = 'block';
    } else {
        passwordErr.style.display = 'none';
    }

    let confirmPassword = document.getElementById('confirmPassword').value;
    let confirmPasswordErr = document.getElementById('confirmPasswordErr');
    if (confirmPassword !== password) {
        confirmPasswordErr.style.display = 'block';
    } else {
        confirmPasswordErr.style.display = 'none';
    }

}


const button = document.getElementById('button');
button.addEventListener('click', validation);

let username = document.getElementById('username');
username.addEventListener('blur', () => {
    let usernameValue = document.getElementById('username').value;
    let validUsername = document.getElementById('validUsername');
    var reg = /^[0-9a-zA-Z]{4,}$/;
    if (usernameValue.match(reg)) {
        validUsername.style.display = 'inline';
    }
})

let password = document.getElementById('password');
password.addEventListener('blur', () => {
    let passwordValue = document.getElementById('password').value;
    let validPassword = document.getElementById('validPassword');
    var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{3,}$/;
    if (passwordValue.match(reg)) {
        validPassword.style.display = 'inline';
    }
})

let confirmPassword = document.getElementById('confirmPassword');


confirmPassword.addEventListener('input', () => {
    let passwordValue = document.getElementById('password').value;
    let confirmPasswordValue = document.getElementById('confirmPassword').value;
    let validConfirmPassword = document.getElementById('validConfirmPassword');
    if (confirmPasswordValue === passwordValue) {
        validConfirmPassword.style.display = 'inline';
    }
})