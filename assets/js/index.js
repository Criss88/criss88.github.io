let overlayOpen = false; // Initialize overlay state as closed

function preventTrackpadScroll(e) {
  // Check if the event indicates trackpad scrolling in either direction
  if (e.deltaX !== 0 || e.deltaY !== 0) {
    // Prevent trackpad scrolling if the overlay is closed
    if (!overlayOpen) {
      e.preventDefault();
    }
  }
}
  
  // Add event listeners for different trackpad-related events
  window.addEventListener('wheel', preventTrackpadScroll, { passive: false });
  window.addEventListener('DOMMouseScroll', preventTrackpadScroll, { passive: false });
  window.addEventListener('mousewheel', preventTrackpadScroll, { passive: false });
  
const step = 25; // Adjust the step size as per your preference
let translateX = 0;
let translateY = 0;
const minTranslateX = window.innerWidth; // -100vw
const maxTranslateX = window.innerWidth; // -200vw
const minTranslateY = window.innerHeight; // -100vw
const maxTranslateY = window.innerHeight; // -200vw

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            translateX += step;
            // Ensure translateX does not go beyond the left bound
            translateX = Math.min(translateX, 0.95 * minTranslateX);
            break;
        case 'ArrowRight':
            translateX -= step;
            // Ensure translateX does not exceed the right bound
            translateX = Math.max(translateX, - 1.5 * maxTranslateX);
            break;
      case 'ArrowUp':
          translateY += step;
          translateY = Math.min(translateY, 1.1 * minTranslateY);
          break;
      
      case 'ArrowDown':
          translateY -= step;
          translateY = Math.max(translateY, - 1.3 * minTranslateY);
          break;

          case 'a':
          translateX += step;
          // Ensure translateX does not go beyond -100vw
          translateX = Math.min(translateX, minTranslateX);
          break;
      case 'd':
          translateX -= step;
          // Ensure translateX does not exceed 200vw
          translateX = Math.max(translateX, - 1.5 * maxTranslateX);
          break;
      case 'w':
          translateY += step;
          translateY = Math.min(translateY, 1000);
          break;
      
      case 's':
          translateY -= step;
          translateY = Math.max(translateY, -1150);
          break;
     
     
  }

    
    // Apply transformations to the background
    document.querySelector('.grid-container').style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
    
});

document.body.style.overflow = 'hidden';


document.addEventListener("DOMContentLoaded", function () {
  const introOverlay = document.getElementById("intro-overlay");
  const enterButton = document.getElementById("close-intro");
  const audioPlayer = document.getElementById("audio");



  // Show the intro overlay when the page loads
  introOverlay.style.display = "block";

  // Close the intro overlay when the close button is clicked
  enterButton .addEventListener("click", function () {
    introOverlay.style.display = "none";

    audioPlayer.play();
    audio.loop = true;
  });





});



const elevenB = document.getElementById("eleven_b");
const elevenPopupC = document.getElementById("elevenc");
const closeButton = document.getElementById("close-floorplan")

elevenB.addEventListener("click", function () {
  elevenPopupC.style.display = "block";

    closeButton .addEventListener("click", function () {
        elevenPopupC.style.display = "none";
      });
});


const infoButton = document.getElementById("info-toggle");
const info = document.getElementById("info");

infoButton.addEventListener("click", function () {
  info.style.display = "block";
  overlayOpen = true; // Set overlay state to open
  document.body.style.overflow = "auto"; // Disable scrolling on the body
});

const infocloseButton = document.getElementById("info-close");

infocloseButton.addEventListener("click", function () {
  info.style.display = "none";
  overlayOpen = false; // Set overlay state to closed
  document.body.style.overflow = "hidden"; // Enable scrolling on the body
});
