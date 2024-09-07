let slideIndex = 0;

function showSlide() {
  const slides = document.querySelectorAll('.carousel-slide img');
  const dots = document.querySelectorAll('.carousel-dots span');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active-dot');
  }
  slides[slideIndex].style.display = 'block';
  dots[slideIndex].classList.add('active-dot');
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 3;
  }
  showSlide();
}

function nextSlide() {
  slideIndex++;
  if (slideIndex > 3) {
    slideIndex = 0;
  }
  showSlide();
}

function currentSlide(n) {
  slideIndex = n;
  showSlide();
}

showSlide();

document.getElementById('exploreBtn').addEventListener('click', function() {
    alert('Explore button clicked!');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way
    alert('Message sent!');
});