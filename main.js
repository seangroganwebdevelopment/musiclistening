


const colorButton1 = document.getElementById('colorButton1');
let body1 = document.body;

colorButton1.addEventListener('click', () => {
  // if()
  body1.classList.toggle('dark-mode');
});

const colorButton2 = document.getElementById('colorButton2');
let body2 = document.body;

colorButton2.addEventListener('click', () => {
  body2.classList.toggle('green-mode');
});
