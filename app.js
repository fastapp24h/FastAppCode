document.getElementById('messageForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const message = document.getElementById('message').value;
  
  try {
    await axios.post('/submit', { message });
    alert('Message sent successfully!');
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
});