```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Updated route handler for better readability
app.get('/', (req, res) => {
  const { userMessage = 'Default User Message', responseMessage = 'Default Response Message' } = req.query;

  res.send(`${userMessage}\n\n${responseMessage}`);
});

app.listen(PORT, () => {
  console.log(`\x1b[36m%s\x1b[0m`, `\nServer is running on http://localhost:${PORT}\n`); // cyan colored log output for better visibility
});
```