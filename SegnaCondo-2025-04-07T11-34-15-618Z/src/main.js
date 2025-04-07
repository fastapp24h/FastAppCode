const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.post('/submit', (req, res) => {
  const userMessage = req.body.message;
  console.log('Messaggio ricevuto:', userMessage); // Processing user message
  res.send('Messaggio ricevuto!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});