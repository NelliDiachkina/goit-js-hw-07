const inputNumber = document.querySelector('input[type="number"]');
const boxesContainer = document.querySelector('#boxes');
const destroyButton = document.querySelector('button[data-destroy]');
const createButton = document.querySelector('button[data-create]');

destroyButton.addEventListener('click', destroyBoxes);

createButton.addEventListener('click', () => {
  destroyBoxes();
  const amount = Number(inputNumber.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  inputNumber.value = '';
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px `;
    box.style.height = `${30 + i * 10}px `;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
