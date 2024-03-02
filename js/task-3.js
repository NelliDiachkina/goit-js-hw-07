const inputUsername = document.querySelector('#name-input');
const outputUsername = document.querySelector('#name-output');

const handleInputChange = e => {
  const inputValue = e.currentTarget.value.trim();
  outputUsername.textContent = inputValue ? inputValue : 'Anonymous';
};

inputUsername.addEventListener('input', handleInputChange);
