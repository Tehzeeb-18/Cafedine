const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const reviewsContainer = document.querySelector('.reviews-container');

let currentIndex = 0;
const totalReviews = document.querySelectorAll('.review-item').length;

// Function to update slide position
function updateSlide() {
  reviewsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Handle previous button click
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
  updateSlide();
  resetAutoSlide(); // Reset auto-slide when manually navigating
});

// Handle next button click
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalReviews;
  updateSlide();
  resetAutoSlide(); // Reset auto-slide when manually navigating
});

// Auto-slide every 6 seconds
let autoSlideInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % totalReviews;
  updateSlide();
}, 6000);

// Function to reset the auto-slide timer
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalReviews;
    updateSlide();
  }, 6000);
}

