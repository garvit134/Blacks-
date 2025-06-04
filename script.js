function handleSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if (!name || !email || !message) {
    status.style.color = "red";
    status.textContent = "Please fill in all fields.";
    return;
  }

  // Fake sending message (no backend)
  status.style.color = "green";
  status.textContent = `Thanks, ${name}! Your message has been received.`;

  // Clear form
  event.target.reset();
}