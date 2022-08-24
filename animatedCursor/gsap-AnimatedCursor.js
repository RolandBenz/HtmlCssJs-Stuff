/*
  Some new ES6 syntax
   - window.gsap and window.CircleType can now be written as gsap and CircleType 
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
 */
const { gsap, CircleType } = window;


/* 
  set initialCursorHeight for cursor
    - document is the gsap-AnimatedCursor.html
    - in html are two divs with classes .text and .cursor--text 
*/
const cursorTextContainerEl = document.querySelector(".cursor--text");
const cursorTextEl = cursorTextContainerEl.querySelector(".text");
let initialCursorHeight;
let circleType = new CircleType(cursorTextEl);
circleType.radius(50);
setTimeout(() => {
  initialCursorHeight = circleType.container.style.getPropertyValue("height");
  console.log(initialCursorHeight);
}, 50);


/* 
  set eventListeners for all elements on website
    - handlePointerEnter() is defined below
    - handlePointerLeave() is defined below
*/
const hoverItems = document.querySelectorAll(".cursor-hover-item");
hoverItems.forEach((item) => {
  item.addEventListener("pointerenter", handlePointerEnter);
  item.addEventListener("pointerleave", handlePointerLeave);
});


/* set initial mouse position outside of window*/
let mouse = {
  x: -100,
  y: -100
};


/* 
  add eventListener to document.body
  - when pointer (mouse) moves it fires und delivers object e, containing the pointer position
  - delivers mouse variable updated cursor position 
*/
document.body.addEventListener("pointermove", updateCursorPosition);
function updateCursorPosition(e) {
  mouse.x = e.pageX;
  mouse.y = e.pageY;
}


/* 
  function updateCursor()
    - directly called below after definition
    - requestAnimationFrame: probably to keep the function running, results shown in F12 in the div tags:
      - in html are two divs with classes cursor--small and cursor--large
        - cursorInner (.cursor--small):
          - set mouse position, 
        - cursorOuter (cursor--large):
          - move cursor to cursorInner after some duration 
        - cursorTextContainerE.
          - if cursor not hovered set opacity and rotation
*/
const cursorOuter = document.querySelector(".cursor--large");
const cursorInner = document.querySelector(".cursor--small");
let isHovered = false;
const hoverEffectDuration = 0.3;
function updateCursor() {
  gsap.set([cursorInner, cursorTextContainerEl], {
    x: mouse.x,
    y: mouse.y
  });
  gsap.to(cursorOuter, {
    duration: 0.15,
    x: mouse.x,
    y: mouse.y
  });
  if (!isHovered) {
    gsap.to(cursorTextContainerEl, hoverEffectDuration * 0.5, {
      opacity: 0
    });
    gsap.set(cursorTextContainerEl, {
      rotate: 0
    });
  }
  requestAnimationFrame(updateCursor);
}
updateCursor();


/* 
  function handlePointerEnter()
    - applied to eventListeners of all above defined
      const hoverItems = document.querySelectorAll(".cursor-hover-item");
    - sets pointer (mouse) properties like:
      - updateCursorText()
      - scale, rotation and opacity
*/
const cursorRotationDuration = 8;
function handlePointerEnter(e) {
  isHovered = true;
  const target = e.currentTarget;
  updateCursorText(target);
  gsap.set([cursorTextContainerEl, cursorTextEl], {
    height: initialCursorHeight,
    width: initialCursorHeight
  });
  gsap.fromTo(
    cursorTextContainerEl,
    {
      rotate: 0
    },
    {
      duration: cursorRotationDuration,
      rotate: 360,
      ease: "none",
      repeat: -1
    }
  );
  gsap.to(cursorInner, hoverEffectDuration, {
    scale: 2
  });
  gsap.fromTo(
    cursorTextContainerEl,
    hoverEffectDuration,
    {
      scale: 1.2,
      opacity: 0
    },
    {
      delay: hoverEffectDuration * 0.75,
      scale: 1,
      opacity: 1
    }
  );
  gsap.to(cursorOuter, hoverEffectDuration, {
    scale: 1.2,
    opacity: 0
  });
}

/* 
  function handlePointerLeave()
    - applied to eventListeners of all above defined
      const hoverItems = document.querySelectorAll(".cursor-hover-item");
    - sets scale and opacity to 1 (normal scale, no opacity)
*/
function handlePointerLeave() {
  isHovered = false;
  gsap.to([cursorInner, cursorOuter], hoverEffectDuration, {
    scale: 1,
    opacity: 1
  });
}


/* data-cursor-text and data-cursor-text-repeat are given attributes in html tags*/
function updateCursorText(textEl) {
  const cursorTextRepeatTimes = textEl.getAttribute("data-cursor-text-repeat");
  const cursorText = returnMultipleString(
    textEl.getAttribute("data-cursor-text"),
    cursorTextRepeatTimes
  );
  circleType.destroy();
  cursorTextEl.innerHTML = cursorText;
  circleType = new CircleType(cursorTextEl);
}


/* function to multiply the entered string*/
function returnMultipleString(string, count) {
  let s = "";
  for (let i = 0; i < count; i++) {
    s += ` ${string} `;
  }
  return s;
}