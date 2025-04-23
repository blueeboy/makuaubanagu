
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

// Close the menu when a link is clicked
menuBar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuBar.classList.remove('show');
  });
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
  const isClickInside = menuBar.contains(event.target) || hamburger.contains(event.target);
  if (!isClickInside) {
    menuBar.classList.remove('show');
  }
});






