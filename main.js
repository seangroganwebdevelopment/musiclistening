


const colorButton1 = document.getElementById('colorButton1');
let body1 = document.body;

colorButton1.addEventListener('click', () => {
  body1.classList.toggle('dark-mode');
});

const colorButton2 = document.getElementById('colorButton2');
let body2 = document.body;

colorButton2.addEventListener('click', () => {
  body2.classList.toggle('dark-mode');
});



// Assigning random colors to different sections of website/



// const colorButtons = document.querySelectorAll('.colorButton');
// const sections = document.querySelectorAll('section');

// colorButtons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     const randomColor = getRandomColor();
//     sections[index].style.backgroundColor = randomColor;
//   });
// });

// function getRandomColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// ----------


