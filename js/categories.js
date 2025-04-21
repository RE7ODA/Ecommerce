
// Animation on scroll (optional enhancement)
window.addEventListener("scroll", () => {
  document.querySelectorAll(".category-card").forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
});

// Initial hidden state + search popup handlers
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

  // Close popup when clicking outside
  window.addEventListener("click", (e) => {
    if (
      !searchPopup.contains(e.target) &&
      !searchToggle.contains(e.target)
    ) {
      searchPopup.classList.remove("active");
    }
  });

  // Hover effect on category cards
  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered");
    });
  });
});
