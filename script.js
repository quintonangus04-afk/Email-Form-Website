const sendBtn = document.getElementById('sendBtn')

sendBtn.addEventListener('click', async () => {
    let emailAdress = document.getElementById('email-input').value
    let message = document.getElementById('text-input').value
    console.log('Btn working as expected!')
    console.log(emailAdress)
    console.log(message)

    let data = {to: emailAdress, message: message}

    let response = await fetch('https://email-backend-tljh.onrender.com/send', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data)
})

let result = await response.json()



    if (result.success) {
        window.location.href = 'success.html'
    } else {
        alert('Email failed to send')
    }


})
