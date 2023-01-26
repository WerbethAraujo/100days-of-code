const isValidEmail = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const isValidCPF = (cpf) => {
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return regex.test(String(cpf).toLowerCase());
};

const form = document.querySelector('form');
const message = document.querySelector('.message');
const inputName = document.querySelector('input[name="name"]');
const inputEmail = document.querySelector('input[name="email"]');

let isValidForm = false;

const resetInputs = (el) => {
  el.classList.remove('invalid');
  el.nextElementSibling.classList.add('error-hidden');
};

const validateElement = (el) => {
  el.classList.add('invalid');
  el.nextElementSibling.classList.remove('error-hidden');
  isValidForm = false;
};

const validateInputs = () => {
  isValidForm = true;
  if (!inputName.value) {
    validateElement(inputName);
  }

  if (!isValidEmail(inputEmail.value)) {
    validateElement(inputEmail);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();

  if (isValidForm) {
    form.remove();
    message.classList.remove('error-hidden');
  }
});

inputName.addEventListener('input', () => {
  resetInputs(inputName);
});

inputEmail.addEventListener('input', () => {
  resetInputs(inputEmail);
});
