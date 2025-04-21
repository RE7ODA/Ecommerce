document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert(`Thank you, ${name}, for contacting us!`);
    document.getElementById('contactForm').reset();
  } else {
    alert('Please fill in all fields.');
  }
});


