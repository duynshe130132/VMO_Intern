
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const usernameError = document.getElementById('usernameError');


window.onload = function () {
    usernameInput.focus();
};

usernameInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);


function checkInputs() {

    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (usernameValue === '' || passwordValue === '') {
        loginButton.disabled = true;
    } else {
        loginButton.disabled = false;
        usernameError.classList.add('hidden');
    }
}


loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameValue = usernameInput.value.trim();
    if (usernameValue.length < 6 || usernameValue.length > 20) {
        usernameError.classList.remove('hidden');
        return;
    }

    alert(`Xin chào: ${usernameValue}`);


    localStorage.setItem('username', usernameValue);
    localStorage.setItem('dateTime', Date.now());

});

const togglePassword = document.getElementById('togglePassword');
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('eye');
});

