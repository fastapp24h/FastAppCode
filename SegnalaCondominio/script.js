fetch('/api/data')
  .then(res => res.json())
  .then(data => {
    document.getElementById("output").innerText = data.message;
  })
  .catch(err => {
    document.getElementById("output").innerText = "Errore nel caricamento.";
  });
