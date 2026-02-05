document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const params = {
    user_name: document.getElementById("name").value,
    user_email: document.getElementById("email").value,
    user_message: document.getElementById("message").value
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
    .then(() => {
      document.getElementById("status").textContent = "Message sent successfully!";
    })
    .catch(() => {
      document.getElementById("status").textContent = "Something went wrong.";
    });
});


