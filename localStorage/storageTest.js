/*2. try to set and again remove an item in the tested storage, if try succeeded it returns true */
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

/*1. add onclick event listener to button */
let performtestButton = document.getElementById("performtest");
let testoutputPara = document.querySelector('#testoutput');
performtestButton.onclick = () => {
  /* check storageAvailable, if function returns true, the test succeeded */
  if (storageAvailable("localStorage")) {
    // Yippee! We can use localStorage awesomeness
    console.log("Yippee! We can use localStorage awesomeness");
    testoutputPara.textContent = "Yippee! We can use localStorage awesomeness. 🤩"
  } else {
    // Too bad, no localStorage for us
    console.log("Too bad, no localStorage for us");
    testoutputPara.textContent = "Too bad, no localStorage for us. 😢"
  }
};
