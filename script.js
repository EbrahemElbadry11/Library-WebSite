const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields!");
    e.preventDefault();
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email address!");
    e.preventDefault();
  } else {
    alert("Thank you for your message!");
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
