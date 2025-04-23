
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



const navbar = document.getElementById('navbar');
let scrollTimeout = null;

window.addEventListener('scroll', () => {
  // Hide navbar while scrolling
  navbar.classList.add('hidden');

  // Clear previous timeout
  clearTimeout(scrollTimeout);

  // Set a timeout to show the navbar after scrolling stops
  scrollTimeout = setTimeout(() => {
    navbar.classList.remove('hidden');
  }, 200); // Adjust delay here if needed
});














