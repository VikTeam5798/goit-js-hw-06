const refs = {
    form: document.querySelector('.login-form'),
    input: document.querySelector('[type="email"]'),
    password: document.querySelector('[type="password"]'),
    btn: document.querySelector('[type="submit"]')
}
console.log(refs);
refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Всі поля повинні бути заповнені')
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}