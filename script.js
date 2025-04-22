
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











particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80
    },
    "color": {
      "value": "#0000FF"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5
    },
    "size": {
      "value": 3
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#0000FF",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      }
    }
  },
  "retina_detect": true
});
