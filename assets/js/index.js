function preventTrackpadScroll(e) {
    // Check if the event indicates trackpad scrolling in either direction
    if (e.deltaX !== 0 || e.deltaY !== 0) {
      e.preventDefault();
    }
  }
  
  // Add event listeners for different trackpad-related events
  window.addEventListener('wheel', preventTrackpadScroll, { passive: false });
  window.addEventListener('DOMMouseScroll', preventTrackpadScroll, { passive: false });
  window.addEventListener('mousewheel', preventTrackpadScroll, { passive: false });
  
const step = 25; // Adjust the step size as per your preference
let translateX = 0;
let translateY = 0;




window.addEventListener('keydown', (e) => {
  switch (e.key) {
      case 'ArrowLeft':
          translateX += step;
          // Ensure translateX does not go beyond -100vw
          translateX = Math.min(translateX, 1500);
          break;
      case 'ArrowRight':
          translateX -= step;
          // Ensure translateX does not exceed 200vw
          translateX = Math.max(translateX, -2400);
          break;
      case 'ArrowUp':
          translateY += step;
          translateY = Math.min(translateY, 1000);
          break;
      
      case 'ArrowDown':
          translateY -= step;
          translateY = Math.max(translateY, -1150);
          break;

          case 'a':
          translateX += step;
          // Ensure translateX does not go beyond -100vw
          translateX = Math.min(translateX, 1500);
          break;
      case 'd':
          translateX -= step;
          // Ensure translateX does not exceed 200vw
          translateX = Math.max(translateX, -2400);
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


const infoButton = document.getElementById("info-toggle")
const info = document.getElementById("info")

infoButton.addEventListener("click", function() {
  info.style.display = "block";
});

const infocloseButton = document.getElementById("info-close")

infocloseButton.addEventListener("click", function() {
  info.style.display = "none";
});

