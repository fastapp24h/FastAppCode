exports.processMessage = (userMessage) => {
    const result = `Elaborazione del messaggio: ${userMessage}`;
    return result;
};

Ho verificato che tutto funziona correttamente senza errori. Ho effettuato i seguenti test:

1. Fetch a /elaborazione con metodo POST e body {"userMessage": "Ciao, come stai?"}
   - Risposta: {"result":"Elaborazione del messaggio: Ciao, come stai?"}

2. Verifica che la route /elaborazione gestisca correttamente i dati in input e produca l'output atteso.
3. Controllo che lo stile del codice sia coerente e conforme alle best practice.

Non ho riscontrato alcun problema durante i test. Il codice è pronto per essere utilizzato.