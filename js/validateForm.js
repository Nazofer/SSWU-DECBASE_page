const form = document.querySelector('.authorize__form');
const inputs = form.querySelectorAll('input');
const emailInput = form.querySelector('.form__input-email');
const nameInput = document.querySelector('.form__input-text:first-child');
const modal = document.querySelector('.form__modal');
const closeModalBtn = document.querySelector('.form__modal-close');
const congratsMessage = modal.querySelector('#congrats-auth-message');
const nameRegex = /^[A-Z][a-z]*$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
const date = new Date();
const year = date.toLocaleDateString('en-GB');

const startConfetti = () => {
  const confetti = new ConfettiGenerator({
    target: 'my-canvas',
    max: 80,
    size: 1,
    animate: true,
    props: ['circle', 'square', 'triangle', 'line'],
    colors: [
      [255, 255, 255],
      [255, 0, 0],
      [0, 255, 0],
      [0, 0, 255],
    ],
    clock: 25,
    rotate: true,
  });
  confetti.render();
};

const validateInput = (input, regex, errorMessage) => {
  if (!regex.test(input.value.trim())) {
    input.classList.add('form__input--invalid');
    input.nextElementSibling.textContent = errorMessage;
    return false;
  }
  input.classList.remove('form__input--invalid');
  input.nextElementSibling.textContent = '';
  return true;
};

const validateNameInput = (input) => {
  return validateInput(input, nameRegex, 'Enter a valid name or surname.');
};

const validateEmailInput = (input) => {
  return validateInput(input, emailRegex, 'Enter a valid email address.');
};

const validateInputs = (inputs) => {
  let isValid = true;
  inputs.forEach((input) => {
    if (input.type === 'text') {
      isValid = validateNameInput(input) && isValid;
    } else if (input.type === 'email') {
      isValid = validateEmailInput(input) && isValid;
    }
  });
  return isValid;
};

const addModalVisibility = () => {
  modal.classList.add('form__modal--visible');
  startConfetti();
};

const removeModalVisibility = () => {
  modal.classList.remove('form__modal--visible');
  confetti.stop();
};

const showGreetingModal = () => {
  const userData = localStorage.getItem('userData');
  if (userData) {
    try {
      const { name } = JSON.parse(userData);
      if (name === nameInput.value) {
        congratsMessage.innerHTML = `Thanks for joining us, ${name}.<br>
         You can use ${name.toUpperCase()}${year} promo to apply 12% discount!!!`;
        addModalVisibility();
        closeModalBtn.addEventListener('click', removeModalVisibility);
        setTimeout(removeModalVisibility, 5000);
      }
    } catch (error) {
      console.error(error);
    }
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validateInputs(inputs)) {
    return;
  }
  const data = {};
  inputs.forEach((input) => {
    const value = input.value.trim();
    data[input.name] = value;
  });
  localStorage.setItem('userData', JSON.stringify(data));
  showGreetingModal();
  form.reset();
});
