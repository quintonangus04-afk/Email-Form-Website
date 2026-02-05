const sendBtn = document.getElementById('sendBtn')

sendBtn.addEventListener('click', async () => {
    let emailAddress = document.getElementById('email-input').value
    let message = document.getElementById('text-input').value

    console.log("Button clicked")
    console.log("Email:", emailAddress)
    console.log("Message:", message)

    let data = { to: emailAddress, message: message }

    let response = await fetch("https://email-backend-production-9d14.up.railway.app/send", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })

    let result = await response.json()

    if (result.success) {
        alert("Email sent successfully!")
    } else {
        alert("Backend responded but failed")
    }
})
