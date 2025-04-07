```javascript
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/message', (req, res) => {
  res.status(200).json({ message: "Welcome to My Webapp" });
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
```