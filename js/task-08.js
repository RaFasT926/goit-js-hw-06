
const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;

    if (emailInput.value === "" || passwordInput.value === "") {
      alert('Por favor diligencia todos los campos');
      return;
    }

    const data = {
      [emailInput.name]: emailInput.value,
      [passwordInput.name]: passwordInput.value,
    };
    console.log(data);

    form.reset();
  });