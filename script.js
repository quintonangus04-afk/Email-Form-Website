const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', () => {
    let emailAddress = document.getElementById('email-input').value;
    let message = document.getElementById('text-input').value;

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        to_email: emailAddress,
        message: message
    })
    .then(() => {
        alert("Email sent successfully!");
    })
    .catch((err) => {
        console.error(err);
        alert("Failed to send email.");
    });
});


