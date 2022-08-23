/* your snippet */

/* html dom elements */
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

/* returns one random element of input array */
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

/* Text template with variables (:var:) for insertion */
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. ' +
                  'When they got to :inserty:, they stared in horror for a few moments, then :insertz:. ' + 
                  'Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 
                    'melted into a puddle on the sidewalk', 
                    'turned into a slug and crawled away'];

/* Button: event listener for click, calls function result() */
randomize.addEventListener('click', result);
function result() {
  let newStory = storyText;
  /* get random elements of arrays */
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  /* insert random elements into story */
  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);
  /* check insert text box if not empty, replace Bob with entered name */
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }
  /* check radio button if uk was chosen (checked), replace strings */
  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }
  /* publish new story */
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
