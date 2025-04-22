
// Select DOM elements
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menuBar = document.querySelector('.menu');
const container = document.getElementById('container');



// Show the menu
hamburger.addEventListener('click', () => {
  menuBar.classList.add('show');
});

// Close the menu
close.addEventListener('click', () => {
  menuBar.classList.remove('show');
});






