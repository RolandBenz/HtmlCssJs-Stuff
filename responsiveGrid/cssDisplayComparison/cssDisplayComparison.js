const articles = document.querySelectorAll(".container");
const selectDisplay = document.querySelector("#display");
selectDisplay.addEventListener("change", updateDisplay);
/* 
    article tag with .container class
        article display style gets the selected value
*/
function updateDisplay() {
  articles.forEach((article) => {
    article.style.display = selectDisplay.value;
  });
}
updateDisplay();


/* 
    div tag with .box class
        box justify-content style gets the selected value
*/
const box = document.querySelector(".box");
const selectJustifyContent = document.querySelector("#justifyContent");
const radiosSelectMaxWidth = document.forms["formMaxWidth"].elements["RadioMaxWidth"]
selectJustifyContent.addEventListener("change", updateJustifyContent);
for(radio in radiosSelectMaxWidth){
  radiosSelectMaxWidth[radio].onclick = function() {
    box.style.maxWidth = this.value
  }
}
/* 
    div tag with .box class
        article display style gets the selected value
*/
function updateJustifyContent() {
    box.style.justifyContent = selectJustifyContent.value;
}
updateJustifyContent();


