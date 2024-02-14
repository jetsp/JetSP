let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};



// Get the modal and button elements
var modal = document.getElementById('popupModal');
var btn = document.getElementById('openModalBtn');
var span = document.getElementById('closeModalBtn');
var blurBackground = document.getElementById('blurBackground');

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
  blurBackground.style.display = 'block';
  // Add animation class
  modal.classList.add('animate__zoomIn');
  blurBackground.classList.add('animate__fadeIn');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
  blurBackground.style.display = 'none';
}
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      blurBackground.style.display = 'none';
    }
  }