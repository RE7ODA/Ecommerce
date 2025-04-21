// Search popup functionality (important to be outside)
const searchToggle = document.querySelector(".search-toggle");
const searchPopup = document.getElementById("searchPopup");
const searchClose = document.getElementById("searchClose");

searchToggle?.addEventListener("click", () => {
  searchPopup.classList.toggle("active");
});

searchClose?.addEventListener("click", () => {
  searchPopup.classList.remove("active");
});


const avatarImages = document.querySelectorAll('.avatar img');

avatarImages.forEach(img => {
  img.style.transition = 'transform 0.3s';

  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.1)';
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const topBar = document.querySelector('.top-bar');
  const messages = [
    "Free Shipping on all orders",
    "Deliveries may be delayed due to holidays"
  ];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % messages.length;
    topBar.textContent = messages[index];
  }, 2000);
});

// Initial hidden state
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-card, .banner, .brand-highlight, .brand-card').forEach(el => {
      el.classList.remove('visible');
    });
  
    const searchToggle = document.querySelector(".search-toggle");
    const searchPopup = document.getElementById("searchPopup");
    const searchClose = document.getElementById("searchClose");
  
    searchToggle.addEventListener("click", () => {
      searchPopup.classList.toggle("active");
    });
  
    searchClose.addEventListener("click", () => {
      searchPopup.classList.remove("active");
    });
  });
  
  window.addEventListener("click", (e) => {
  
    if (
      !searchPopup.contains(e.target) &&
      !searchToggle.contains(e.target)
    ) {
      searchPopup.classList.remove("active");

      document.querySelector('.search-toggle').addEventListener('click', function () {
        document.getElementById('searchPopup').classList.add('active');
      });
      
      
      document.getElementById('searchClose').addEventListener('click', function () {
        document.getElementById('searchPopup').classList.remove('active');
      });
    }
  });
  
  