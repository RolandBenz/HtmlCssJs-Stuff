/*
    count from 0 to 99
    for   
*/
var i = 0;
function countNumbers() {
    if(i < 100) {
        i = i + 1;
        postMessage(i);
        // Wait for sometime before running this script again
        setTimeout("countNumbers()", 500);
    } 
}
countNumbers();
console.log("webworker.js just finished its work.")