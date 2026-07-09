document.getElementById('my-contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const data = {
        name: document.getElementById('form-name').value,
        email: document.getElementById('form-email').value,
        message: document.getElementById('form-message').value
    };

    try {
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Message sent safely and securely!');
            document.getElementById('my-contact-form').reset();
        } else {
            alert('Something went wrong. Please try again.');
        }
    } catch (error) {
        alert('Error connecting to the server.');
    }
});


