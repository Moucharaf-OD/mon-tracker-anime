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

// création de la table "webtoons" si elle n'existe pas déjà
db.exec(`
    CREATE TABLE IF NOT EXISTS webtoons (   
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titre TEXT NOT NULL,
        synopsis TEXT,
        note INTEGER
    )
`);

//exportation de la base de données pour pouvoir l'utiliser dans d'autres fichiers
module.exports = db;


