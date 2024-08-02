const form = document.getElementById('form');
const company_name = document.getElementById('company_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2nd = document.getElementById('password2nd');

form.addEventListener('submit', e => {
    e.preventDefault();

    InputsAreCorrect();
});

const setError = (element, message) => {
    const input = element.parentElement;
    const error = input.querySelector('.error');

    error.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');
}

const setSuccess = element => {
    const input = element.parentElement;
    const error = input.querySelector('.error');

    error.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
};

const EmailisValid = email => {
    const check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return check.test(String(email).toLowerCase());
}

const InputsAreCorrect= () => {
    const ValueofCompany = company_name.value.trim();
    const ValueofEmail = email.value.trim();
    const ValueofPassword = password.value.trim();
    const ValueofPassword2 = password2nd.value.trim();

    if(ValueofCompany === '') {
        setError(company_name, 'Company Name is required');
    } else {
        setSuccess(company_name);
    }

    if(ValueofEmail === '') {
        setError(email, 'Enter an email');
    } else if (!EmailisValid(ValueofEmail)) {
        setError(email, 'Enter a valid email address');
    } else {
        setSuccess(email);
    }

    if(ValueofPassword === '') {
        setError(password, 'Please enter a Password');
    } else if (ValueofPassword.length < 5 ) {
        setError(password, 'Your password must have at least 5 characters')
    } else {
        setSuccess(password);
    }

    if(ValueofPassword2 === '') {
        setError(password2nd, 'Please confirm your password');
    } else if (ValueofPassword2 !== ValueofPassword) {
        setError(password2nd, "Passwords don't match");
    } else {
        setSuccess(password2nd);
    }

};
