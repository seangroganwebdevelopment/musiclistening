


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


// hide music in lists ------`


const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const section = this.nextElementSibling;
    const isHidden = section.style.display === 'block';
    section.style.display = isHidden ? 'none': 'block';
  });
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


// const toggleButton = document.getElementById('toggle-button');
// const hiddenSection = document.getElementById('hidden-section');

// toggleButton.addEventListener('click', function() {
//   hiddenSection.style.display = (hiddenSection.style.display === 'none') ? 'block' : 'none';
// });

// css/

// #hidden-section {
//   display: none;
// }

// html 

// <button id="toggle-button">Toggle Section</button>
// <div id="hidden-section">
//   <!-- Content to be hidden -->
// </div>




