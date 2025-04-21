// Input glow effect on focus
document.querySelectorAll('form input, select').forEach(input => {
  input.addEventListener('focus', () => {
    input.style.boxShadow = '0 0 8px rgba(0, 123, 255, 0.5)';
    input.style.transition = '0.3s ease';
  });
  input.addEventListener('blur', () => {
    input.style.boxShadow = 'none';
  });
});

// Password match check
document.querySelector('form')?.addEventListener('submit', (e) => {
  const pw = document.querySelectorAll('input[type="password"]');
  if (pw[0].value != pw[1].value) {
    e.preventDefault();
    alert('Passwords do not match!');
    pw[0].style.borderColor = 'red';
    pw[1].style.borderColor = 'red';
  } else {
    e.preventDefault();
    registerAccount(document.querySelector('input[type="email"]').value, pw[0].value,document.querySelector('input[name="Name"]').value, document.querySelector('input[name="address"]').value,document.querySelector('input[name="phone"]').value);
  }
});


// Smooth transition to login
const loginLink = document.querySelector('.login-link a');
loginLink?.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.classList.add('page-transition');
  setTimeout(() => {
    window.location.href = loginLink.getAttribute('href');
  }, 500);
});

