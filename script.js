const sendBtn = document.getElementById('sendBtn')

sendBtn.addEventListener('click', async () => {
    let emailAddress = document.getElementById('email-input').value
    let message = document.getElementById('text-input').value

    let data = { to: emailAddress, message: message }

    let response = await fetch('https://email-backend-tljh.onrender.com/send', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
    })

    let result = await response.json()

    if (result.success) {
        alert("Backend received your request!")
    } else {
        alert("Backend responded but failed")
    }
})
