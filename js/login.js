// Input focus effect
document.querySelectorAll('.register-form input').forEach(input => {
  input.addEventListener('focus', () => {
    input.style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.3)';
  });
  input.addEventListener('blur', () => {
    input.style.boxShadow = 'none';
  });
});

// Transition to register page
const registerLink = document.querySelector('.login-link a');
registerLink?.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.classList.add('page-transition');
  setTimeout(() => {
    window.location.href = registerLink.getAttribute('href');
  }, 500);
});

document.querySelector("form").onsubmit = function (e) {
  e.preventDefault();
  var email = document.querySelector("input[type='email']").value
  var password = document.querySelector("input[type='password']").value
  loginAccount(email, password);
}