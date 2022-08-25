function dragStart(e) {
  // Sets the operation allowed for a drag source
  e.dataTransfer.effectAllowed = "move";

  // Sets the value and type of the dragged data
  e.dataTransfer.setData("Text", e.target.getAttribute("id"));
}
function dragOver(e) {
  // Prevent the browser default handling of the data
  e.preventDefault();
  e.stopPropagation();
}
function drop(e) {
  // Cancel this event for everyone else
  e.stopPropagation();
  e.preventDefault();

  // Retrieve the dragged data by type
  var data = e.dataTransfer.getData("Text");

  // Append image to the drop box
  e.target.appendChild(document.getElementById(data));
}
