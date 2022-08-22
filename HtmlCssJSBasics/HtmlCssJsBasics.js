
/* A1. switch images onClick */
const myImage = document.querySelector('img');
myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'media/firefox-icon.png') {
    myImage.setAttribute('src','media/firefox2.jpg');
  } else {
    myImage.setAttribute('src','media/firefox-icon.png');
  }
}

/* B2. set name to local storage */
function setUserName() {
  const myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

/*
B1. Set heading by checking localStorage (similar to cookie) and if non existent call function. 
  https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
*/
let myHeading = document.querySelector('h1');
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

/* B3. button to reset name */
let myButton = document.querySelector('button');
myButton.onclick = () => {
  setUserName();
}
