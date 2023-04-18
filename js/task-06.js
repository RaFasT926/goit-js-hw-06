const input = document.getElementById('validation-input');
const expectedLength = input.getAttribute('data-length');

  input.addEventListener('blur', () => {
    const inputValue = input.value;
    const inputLength = inputValue.length;

    if (inputLength !== parseInt(expectedLength)) {

        input.classList.remove('valid');
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
      }

  });