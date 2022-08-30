/*Hack*/
/*
var p = document.querySelector(".prettyprint");
p.textContent = p.textContent.replace(/^\s+/mg, "");
*/

/*
    Much better Hack
    - [] is an array.
        This array isn't used at all.
        It's being put on the page, because using an array gives you access to array prototypes, like .forEach.
        This is just faster than typing Array.prototype.forEach.call(...);
    - Therefore, it is used for creating a quick way to call the forEach function, 
        and changing this from the empty array to a list of all <pre> tags, and for each <pre> in-order, 
        calling the function provided.
    - Discussion about other ways to do this:
      https://stackoverflow.com/questions/16053357/what-does-foreach-call-do-in-javascript
*/
[].forEach.call(document.querySelectorAll("pre"), function ($pre) {
  var lines = $pre.textContent.split("\n");
  var matches;
  var indentation =
    (matches = /^\s+/.exec(lines[0])) != null ? matches[0] : null;
  if (!!indentation) {
    lines = lines.map(function (line) {
      return line.replace(indentation, "");
    });
    return ($pre.textContent = lines.join("\n").trim());
  }
});
