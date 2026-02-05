const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', async () => {
    let emailAddress = document.getElementById('email-input').value;
    let message = document.getElementById('text-input').value;

    let data = { to: emailAddress, message: message };

    let response = await fetch("https://email-backend-production-9d14.up.railway.app/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    let result = await response.json();

    if (result.success) {
        alert("Email sent successfully!");
    } else {
        alert("Failed to send email.");
    }
});
