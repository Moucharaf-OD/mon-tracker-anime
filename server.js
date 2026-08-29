// importation d'Express,déjà installé avec npm
const express = require('express');

// importation de la base de données
const db = require('./database.js');

// On crée une "application" Express — c'est notre serveur
const app = express();
app.use(express.json());

// On définit sur quel port le serveur va écouter
const PORT = 3000;

// Une route de test : quand quelqu'un visite "/", on répond avec un message
app.get('/', (req, res) => {
  res.send('Le serveur Otaku Log fonctionne !');
});

//Nouvelle route : renvoie tous les animés stockés dans la base de données
app.get('/api/animes', (req, res) => {
  const animes = db.prepare('SELECT * FROM animes').all();
  res.json(animes);
});

//Nouvelle route : renvoie tous les webtoons stockés dans la base de données
app.get('/api/webtoons', (req, res) => {
  const webtoons = db.prepare('SELECT * FROM webtoons').all();
  res.json(webtoons);
});

//Nouvelle route : ajoute un animé à la base de données
app.post('/api/animes', (req, res) => {
  const { titre, synopsis, note } = req.body;
  const stmt = db.prepare('INSERT INTO animes (titre, synopsis, note) VALUES (?, ?, ?)');
  const resultat = stmt.run(titre, synopsis, note);
  res.json({ id: resultat.lastInsertRowid, titre, synopsis, note });
});

//Nouvelle route : ajoute un webtoon à la base de données
app.post('/api/webtoons', (req, res) => {
    const { titre, synopsis, note } = req.body;
    const stmt = db.prepare('INSERT INTO webtoons (titre, synopsis, note) VALUES (?, ?, ?)');
    const resultat = stmt.run(titre, synopsis, note);
    res.json({ id: resultat.lastInsertRowid, titre, synopsis, note });
});

// On démarre le serveur, il écoute maintenant sur le port 3000
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});