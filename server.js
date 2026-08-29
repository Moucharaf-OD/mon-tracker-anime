// importation d'Express,déjà installé avec npm
const express = require('express');

// On crée une "application" Express — c'est notre serveur
const app = express();

// On définit sur quel port le serveur va écouter
const PORT = 3000;

// Une route de test : quand quelqu'un visite "/", on répond avec un message
app.get('/', (req, res) => {
  res.send('Le serveur Otaku Log fonctionne !');
});

// On démarre le serveur, il écoute maintenant sur le port 3000
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});