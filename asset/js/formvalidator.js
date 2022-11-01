

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const userName = $('#username');
const email = $('#email');
const password = $('#password');
const password2 = $('#password2');

const loginBtn = $('.login-btn');
const overlayForm = $('.overlay-form');


const signup1 = $('.header-navbar__item--signup');
const signup2 = $('.welcome--link__signup');
const signup3 = $('.form-label__link--signup');

const login1 = $('.header-navbar__item--login');
const login2 = $('.welcome--link__login');
const login3 = $('.form-label__link---login');

const navSignup = $('.navbar-mobile-tablet__item--signup');
const navLogin = $('.navbar-mobile-tablet__item--login');

const registerForm  = $('.register-form');
const loginForm  = $('.login-form');
const registerContainer = $('.register-container');
const escapeIcons = $$('.form-escape__icon');

function checkForm() {
    loginBtn.addEventListener('click',function(e) {
        e.preventDefault();
    
        if(!checkRequired([userName, email, password, password2])) {
            checkEmail(email);
            checkLength(userName, 6, 20);
            checkLength(password, 6, 25);
            checkPassword(password,password2);
        };
    });
};

// show error message
function errorMessage(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

//show success border bottom
function successShow(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = '';
};

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

function checkRequired(inputArr) {
    let isrequired = false;
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            errorMessage(input, `${getFieldName(input)} là bắt buộc`);
            isrequired = true;
        } else {
            successShow(input);
        };
    });
    return isrequired;
};

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        successShow(input);
    } else {
        errorMessage(input, 'Email không đúng định dạng');
    };
};

function checkLength(input, min, max) {
    if(input.value.length < min) {
        errorMessage(input, `${getFieldName(input)} phải lớn hơn ${min} kí tự`);
    } else if(input.value.length > max) {
        errorMessage(input, `${getFieldName(input)} phải ít hơn ${max} kí tự`);
    } else {
        successShow(input);
    };
};

function checkPassword(input1, input2) {
    if(input1.value !== input2.value) {
        errorMessage(input2, 'Password nhập lại chưa đúng')
    };
};




function showSignupBox() {
    registerForm.classList.remove('hide');
    overlayForm.classList.remove('hide');
    registerContainer.style.display = 'flex';

};

function showLoginBox() {
    loginForm.classList.remove('hide');
    overlayForm.classList.remove('hide');
    registerContainer.style.display = 'flex';

};

function hideSignupBox() {
    registerForm.classList.add('hide');
    overlayForm.classList.add('hide');
    registerContainer.style.display = 'none';
};

function hideLoginBox() {
    loginForm.classList.add('hide');
    overlayForm.classList.add('hide');
    registerContainer.style.display = 'none';

};

function fromSingupToLogin() {
    registerForm.classList.add('hide');
    loginForm.classList.remove('hide');
};

function fromLoginToSingup() {
    loginForm.classList.add('hide');
    registerForm.classList.remove('hide');
};

signup1.addEventListener('click', showSignupBox);
signup2.addEventListener('click', showSignupBox);
signup3.addEventListener('click', fromLoginToSingup);
navSignup.addEventListener('click', showSignupBox);
login1.addEventListener('click', showLoginBox);
login2.addEventListener('click', showLoginBox);
login3.addEventListener('click', fromSingupToLogin);
navLogin.addEventListener('click', showLoginBox);

overlayForm.addEventListener('click', hideSignupBox);
overlayForm.addEventListener('click', hideLoginBox);

escapeIcons.forEach(escapeIcon => {
    escapeIcon.addEventListener('click', hideSignupBox);
    escapeIcon.addEventListener('click', hideLoginBox);
});

window.onkeydown = e => {
    if ( e.keyCode == 27 ) {
        hideSignupBox();
        hideLoginBox();
    };
};

checkForm();

export default checkForm;