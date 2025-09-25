// ------------------ Typed.js Animation ------------------
document.addEventListener("DOMContentLoaded", function() {
  const words = ["Connect", "Collaborate", "Contest", "Code"];
  let i = 0;
  const typingEl = document.querySelector(".typing");

  function typeWord() {
    typingEl.textContent = "";
    let word = words[i];
    let j = 0;

    function typeChar() {
      if (j < word.length) {
        typingEl.textContent += word[j];
        j++;
        setTimeout(typeChar, 150);
      } else {
        setTimeout(eraseChar, 1000);
      }
    }

    function eraseChar() {
      if (j > 0) {
        typingEl.textContent = word.slice(0, j - 1);
        j--;
        setTimeout(eraseChar, 80);
      } else {
        i = (i + 1) % words.length;
        typeWord();
      }
    }

    typeChar();
  }

  typeWord();
});
//--------login toggle-----

function toggleLogin() {
  const modal = document.getElementById('loginModal');
  modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
}

// ------------------ Search Overlay ------------------
const searchInput = document.getElementById('searchInput');
const searchOverlay = document.getElementById('searchOverlay');

searchInput.addEventListener('focus', () => {
  searchOverlay.style.display = 'block';
});

document.addEventListener('click', (e) => {
  if (!searchInput.contains(e.target) && !searchOverlay.contains(e.target)) {
    searchOverlay.style.display = 'none';
  }
});

// ------------------ Hero Carousel ------------------
const slides = document.querySelectorAll('.hero-carousel .slide');
const prevBtn = document.querySelector('.hero-carousel .prev');
const nextBtn = document.querySelector('.hero-carousel .next');
const dotsContainer = document.querySelector('.dots-container');
let slideIndex = 0;

// Create dots
slides.forEach((_, idx) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (idx === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showSlide(idx));
  dotsContainer.appendChild(dot);
});

function showSlide(n) {
  slides.forEach(s => s.classList.remove('active'));
  slides[n].classList.add('active');
  document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
  document.querySelectorAll('.dot')[n].classList.add('active');
  slideIndex = n;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto slide
setInterval(nextSlide, 5000);
