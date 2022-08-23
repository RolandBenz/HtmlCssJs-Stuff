/*A1. fetch dom elements by tags */
var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');
var imgElem = document.querySelector('img');
/* fetch input and select elements by id */
var bgcolorForm = document.getElementById('bgcolor');
var fontForm = document.getElementById('font');
var imageForm = document.getElementById('image');
/* check localStorage (getItem), and call functions 2. and 3. below */
if(!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}
/*2. write into localStorage (setItem), key:value pair, then call the function below */
function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('font').value);
  localStorage.setItem('image', document.getElementById('image').value);
  setStyles();
}
/*3. 
  - load localStorage (getItem), 
  - set input and select elements according to localStorage,
  - set style on dom elements html and p
  - set attribute on dom element img
*/
function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');
  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;
  //htmlElem.style.backgroundColor = '#' + currentColor;
  htmlElem.style.backgroundColor = currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}
/*B1. onChange event listener which call function 2. above */
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
