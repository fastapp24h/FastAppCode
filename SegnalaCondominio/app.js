const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware per il parsing del body in JSON
app.use(express.json());

// Accoppiamento della route principale con il gestore corrispondente
const elaborazioneController = require('./controllers/elaborazioneController');
app.use('/elaborazione', elaborazioneController);

app.listen(port, () => {
    console.log(`Server in esecuzione sulla porta ${port}`);
});