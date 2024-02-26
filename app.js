// Get the cursor element
var cursor = document.getElementById('cursor');

// Function to update the cursor position and size
function updateCursorPosition(event) {
    // Set the cursor position to the current mouse position
    cursor.style.left = (event.clientX - cursor.offsetWidth / 2) + 'px';
    cursor.style.top = (event.clientY - cursor.offsetHeight / 2) + 'px';
}

// Function to update the cursor size when hovering over elements with "cursor: pointer"
function updateCursorSize(event) {
    // Get the target element
    var target = event.target;

    // Check if the target element has "cursor: pointer" property
    if (window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer') {
        // Increase cursor size by 5px
        cursor.style.width = (cursor.offsetWidth + 5) + 'px';
        cursor.style.height = (cursor.offsetHeight + 5) + 'px';
        // Add pulse animation class
        cursor.classList.add('pulse');
    }
}

// Function to reset cursor size and remove pulse animation
function resetCursorSize() {
    // Reset cursor size
    cursor.style.width = '';
    cursor.style.height = '';
    // Remove pulse animation class
    cursor.classList.remove('pulse');
}

// Function to add glow effect to the cursor
function addGlow() {
    cursor.classList.add('glow');
}

// Function to remove glow effect from the cursor
function removeGlow() {
    cursor.classList.remove('glow');
}

// Add event listeners to update cursor position, size, and add/remove glow effect
document.addEventListener('mousemove', updateCursorPosition);
document.addEventListener('mouseenter', addGlow);
document.addEventListener('mouseleave', removeGlow);
document.addEventListener('mouseover', updateCursorSize);
document.addEventListener('mouseout', resetCursorSize);




// Get the modal and button elements
var modal = document.getElementById('popupModal');
var btn = document.getElementById('openModalBtn');
var span = document.getElementById('closeModalBtn');
var blurBackground = document.getElementById('blurBackground');

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
  blurBackground.style.display = 'block';
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
  blurBackground.style.display = 'none';
}

  document.addEventListener("DOMContentLoaded", function () {
    const targetElement = document.querySelector("#typingArea");
    new Typewriter(targetElement, {
      loop: false,
      typeSpeed: 1000
    })
    .typeString("<span style='color: #ffffff;'>Hello!</span><br>")
    .typeString("<span style='color: #ffffff;'>My Name is </span>")
    .typeString("<span style='color: #ff0008;'>Jet Roe</span><br>")
    .typeString("<span style='color: #ffffff;'>and </span>")
    .typeString("WELCOME")
    .typeString("<span style='color: #ffffff;'> to my</span> <br>")
    .typeString("PORTFOLIO!")
    .start();
  });

  // Function to check if the element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to check if the element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
(function () {
	window.onpageshow = function(event) {
		if (event.persisted) {
			window.location.reload();
		}
	};
})();



const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".glitch").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}