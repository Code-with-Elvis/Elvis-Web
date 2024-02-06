
//Dark Mode
let themeElem = document.querySelector('.theme-changer');
let themeSlider = document.querySelector('.slider');
let body = document.body;

themeElem.addEventListener('click', ()=> {
  themeSlider.classList.toggle('active');
  if(themeSlider.classList.contains('active')) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light')
  }
})

let userTheme = localStorage.getItem('theme');

window.addEventListener("DOMContentLoaded", ()=> {
  if(userTheme === 'dark') {
    body.classList.add('dark-mode');
    themeSlider.classList.add('active');
  } else {
    localStorage.setItem('theme', 'light');
    themeSlider.classList.remove('active');
  }
})

//The Preloader

let preloaderElem = document.querySelector('.preloader');

window.onload = () => {
  preloaderElem.classList.add('load')
}

//Nav Links
let linkElem = document.querySelector('.links');
let menu = document.querySelector('.menu');

menu.addEventListener('click', function() {
  linkElem.classList.toggle('show-links');
})