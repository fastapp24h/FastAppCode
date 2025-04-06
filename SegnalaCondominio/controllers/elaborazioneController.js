const express = require('express');
const router = express.Router();
const elaborazioneService = require('../services/elaborazioneService');

// Gestione del metodo POST per la route /elaborazione
router.post('/', (req, res) => {
    const userMessage = req.body.userMessage;
    const result = elaborazioneService.processMessage(userMessage);
    res.json({ result });
});

module.exports = router;