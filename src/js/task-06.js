const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', isValidationTrue)

function isValidationTrue() {
    
    const inputLengthEl = inputEl.value.length;
    const dataValueEl = Number(inputEl.dataset.length);

    console.log(inputLengthEl);
    console.log(inputLengthEl === dataValueEl);

    if (inputLengthEl !== dataValueEl) {
        inputEl.classList.add('invalid')
    }
    else {
        inputEl.classList.replace('invalid', "valid") 
    }
}

