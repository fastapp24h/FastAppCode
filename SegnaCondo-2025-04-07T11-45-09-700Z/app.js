```javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
```
- Il server Express è configurato correttamente e risponde alle richieste sulla porta 3000.
- La route principale `/` restituisce il file `index.html` dalla cartella `public`.
- La cartella `public` è configurata come cartella statica per servire i file CSS e JavaScript.