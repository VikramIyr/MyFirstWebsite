// Adding dynamic animations on scroll
const animatedElements = document.querySelectorAll('.animated');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

animatedElements.forEach(element => {
    observer.observe(element);
});

// Example stock data update (replace this with actual data fetching)
function updateStockPrices() {
    const stockList = document.getElementById('stock-list');
    stockList.innerHTML = `
        <li>Stock 1: $${(Math.random() * 100).toFixed(2)}</li>
        <li>Stock 2: $${(Math.random() * 100).toFixed(2)}</li>
        <li>Stock 3: $${(Math.random() * 100).toFixed(2)}</li>
    `;
}

// Update stock prices every 5 seconds
setInterval(updateStockPrices, 5000);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
