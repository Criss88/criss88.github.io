const step = 25; // Adjust the step size as per your preference
let translateX = 0;
let translateY = 0;


window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            translateX += step;
            break;
        case 'ArrowRight':
            translateX -= step;
            break;
        case 'ArrowUp':
            translateY += step;
            break;
        case 'ArrowDown':
            translateY -= step;
            break;
    }
    
    // Apply transformations to the background
    document.querySelector('.grid-container').style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
  const introOverlay = document.getElementById("intro-overlay");
  const closeButton = document.getElementById("close-intro");

  // Show the intro overlay when the page loads
  introOverlay.style.display = "block";

  // Close the intro overlay when the close button is clicked
  closeButton.addEventListener("click", function () {
    introOverlay.style.display = "none";
  });


});

