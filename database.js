/* importation de better-sqlite3, déjà installé avec npm */
const Database = require('better-sqlite3');

//on crée le fichier de base de données
const db = new Database('otaku-log.db');

//création de la table "animes" si elle n'existe pas déjà
db.exec(`
    CREATE TABLE IF NOT EXISTS animes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titre TEXT NOT NULL,
        synopsis TEXT,
        note INTEGER
    )
`);

// On récupère la liste des colonnes actuelles de la table animes
const colonnesAnimes = db.prepare("PRAGMA table_info(animes)").all().map(col => col.name);

// On ajoute les colonnes manquantes une par une, si elles n'existent pas déjà
if (!colonnesAnimes.includes('titre_secondaire')) {
  db.exec('ALTER TABLE animes ADD COLUMN titre_secondaire TEXT');
}
if (!colonnesAnimes.includes('date_sortie')) {
  db.exec('ALTER TABLE animes ADD COLUMN date_sortie TEXT');
}
if (!colonnesAnimes.includes('image')) {
  db.exec('ALTER TABLE animes ADD COLUMN image TEXT');
}

// création de la table "webtoons" si elle n'existe pas déjà
db.exec(`
    CREATE TABLE IF NOT EXISTS webtoons (   
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titre TEXT NOT NULL,
        synopsis TEXT,
        note INTEGERgit 
    )
`);

// On récupère la liste des colonnes actuelles de la table webtoons
const colonnesWebtoons = db.prepare("PRAGMA table_info(webtoons)").all().map(col => col.name);

// On ajoute les colonnes manquantes une par une, si elles n'existent pas déjà
if (!colonnesWebtoons.includes('titre_secondaire')) {
  db.exec('ALTER TABLE webtoons ADD COLUMN titre_secondaire TEXT');
}
if (!colonnesWebtoons.includes('date_sortie')) {
  db.exec('ALTER TABLE webtoons ADD COLUMN date_sortie TEXT');
}
if (!colonnesWebtoons.includes('image')) {
  db.exec('ALTER TABLE webtoons ADD COLUMN image TEXT');
}

//exportation de la base de données pour pouvoir l'utiliser dans d'autres fichiers
module.exports = db;


