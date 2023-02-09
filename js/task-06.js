const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', isValidationTrue)

function isValidationTrue() {
    
    const inputLengthEl = inputEl.value.length;
    const dataValueEl = Number(inputEl.dataset.length);

    console.log(inputLengthEl);
    console.log(inputLengthEl === dataValueEl);

    if (inputLengthEl !== dataValueEl) {
        inputEl.classList.add('invalid')

        if (inputEl.classList.contains('valid')) {
            inputEl.classList.remove('valid')
        }
    }

    else {
        inputEl.classList.add('valid')

        if (inputEl.classList.contains('invalid')) {
            inputEl.classList.remove('invalid')
        }
    }
}

