```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware for parsing JSON in request body
app.use(express.json());

// Middleware for serving static files from 'public' directory
app.use(express.static('public'));

// Route for processing messages
app.post('/process-message', (req, res) => {
  const { message } = req.body;
  const processedMessage = `Processed Message: ${message}`;
  res.json({ processedMessage });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```