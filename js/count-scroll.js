const horizontalScroll = document.querySelector(".card__list");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const counterText = document.querySelector(".card__button-text");
let counter = 1;
const totalCards = 3;

updateButtonState();

function updateCounter() {
  counterText.textContent = `${counter} из ${totalCards}`;
  updateButtonState();
}

function updateButtonState() {
  if (counter === 1) {
    leftBtn.classList.add("disabled");
  } else {
    leftBtn.classList.remove("disabled");
  }
  if (counter === totalCards) {
    rightBtn.classList.add("disabled");
  } else {
    rightBtn.classList.remove("disabled");
  }
}

function smoothScroll(target, duration) {
  const start = horizontalScroll.scrollLeft;
  const change = target - start;
  const increment = 20;
  let currentTime = 0;
  const animateScroll = () => {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    horizontalScroll.scrollLeft = val;
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };
  animateScroll();
}

// Easing function for smooth animation
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

rightBtn.addEventListener("click", () => {
  if (counter < totalCards) {
    smoothScroll(horizontalScroll.scrollLeft + 285, 500);
    counter++;
    updateCounter();
  }
});

leftBtn.addEventListener("click", () => {
  if (counter > 1) {
    smoothScroll(horizontalScroll.scrollLeft - 285, 500);
    counter--;
    updateCounter();
  }
});

// Prevent horizontal scroll from touchpad
horizontalScroll.addEventListener("wheel", (event) => {
  // Prevent horizontal scrolling
  if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
    event.preventDefault(); // Prevent horizontal scroll
  }
});

// Initialization of counter display
updateCounter();
