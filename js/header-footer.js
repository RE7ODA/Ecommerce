// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href');
      if (target.startsWith("#")) {
        e.preventDefault();
        const targetId = target.substring(1);
        const section = document.getElementById(targetId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Button hover animation
  document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });
  
  // Toggle search bar visibility
  const searchBar = document.querySelector('.search-bar');
  
  searchToggle.addEventListener('click', () => {
    searchBar.classList.toggle('hidden');
  });