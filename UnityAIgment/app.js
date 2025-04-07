```javascript
document.getElementById('message-form').addEventListener('submit', submitForm);

async function submitForm(event) {
  event.preventDefault();

  try {
    const message = document.getElementById('message').value;
    const response = await axios.post('/submit', { userMessage: message });
    displayResponseMessage(response.data.message);
  } catch (error) {
    console.error('Error sending message:', error);
    displayResponseMessage('An error occurred while sending the message.');
  }
}

function displayResponseMessage(msg) {
  const responseElement = document.getElementById('response');
  responseElement.textContent = msg;
}
```