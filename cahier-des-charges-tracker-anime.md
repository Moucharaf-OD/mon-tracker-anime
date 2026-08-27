# Cahier des charges — Tracker Animés & Webtoons

## 1. Contexte et objectifs

**Porteur du projet :** Étudiant en 2ème année de Licence Développement d'Application (ESGIS Avedji, Lomé)

**Objectif principal :** Réaliser un site web personnel permettant de suivre les animés et webtoons déjà vus/lus, dans un but **pédagogique** : apprendre à concevoir, développer et héberger un site web complet, du front-end à la base de données.

**Objectif secondaire :** Avoir un outil utile au quotidien pour organiser sa liste d'animés/webtoons.

---

## 2. Public cible

Usage personnel (mono-utilisateur au départ). Pas de gestion multi-comptes prévue dans une première version.

---

## 3. Fonctionnalités

### 3.1 Fonctionnalités essentielles (MVP)
- Ajouter un animé ou un webtoon (titre, type, statut, note, image de couverture)
- Voir la liste complète des entrées
- Modifier une entrée existante
- Supprimer une entrée
- Marquer un statut : *à voir*, *en cours*, *terminé*, *abandonné*

### 3.2 Fonctionnalités avancées (à ajouter après le MVP)
- Recherche par titre
- Filtres (par statut, par type animé/webtoon, par note)
- Tri (alphabétique, note, date d'ajout)
- Système de notation (ex : /10 ou étoiles)
- Champ commentaire personnel
- Statistiques simples (nombre total vu, temps estimé, etc.)

### 3.3 Hors périmètre (pour l'instant)
- Comptes utilisateurs multiples / authentification
- Recommandations automatiques
- Import depuis des sites externes (MyAnimeList, etc.)

---

## 4. Choix techniques

| Couche | Technologie | Justification |
|---|---|---|
| Structure & style | HTML / CSS | Bases du développement web, à apprendre en premier |
| Interactivité | JavaScript | Manipulation du DOM, logique côté client |
| Serveur | Node.js + Express | Léger, bonne porte d'entrée vers le backend |
| Base de données | SQLite (puis évolution possible vers PostgreSQL/MySQL) | Simple à mettre en place pour débuter, principes transférables |
| Hébergement | Render / Railway (plateforme gratuite) | Pas de coût, déploiement simple pour un projet perso |
| Gestion de version | Git + GitHub | Suivre l'évolution du code, avoir une sauvegarde en ligne, apprendre un outil indispensable pour tout développeur |

---

## 5. Contraintes

- Aucune base solide en développement au départ → apprentissage progressif, étape par étape
- Approche pédagogique : code écrit et compris ligne par ligne, pas de copier-coller de solution toute faite
- Environnement de travail : VS Code (Node.js à installer lors de l'étape backend)

---

## 6. Découpage en étapes du projet

0. **Git & GitHub** — initialisation du dépôt, premiers commits, création du repo distant sur GitHub
1. **Bases HTML/CSS** — structure et style de la page principale
2. **JavaScript de base** — interactivité côté client (ajout/suppression visuelle, filtres simples)
3. **Backend (Node.js + Express)** — création d'un serveur et d'une API
4. **Base de données (SQLite)** — stockage durable des données
5. **Fonctionnalités avancées** — recherche, tri, statuts, notes
6. **Hébergement en ligne** — mise en ligne du site sur une plateforme gratuite

---

## 7. Critères de réussite

- Le site permet d'ajouter, modifier, supprimer et consulter des animés/webtoons
- Les données sont conservées entre deux visites (grâce à la base de données)
- Le site est accessible en ligne via une URL publique
- Chaque étape du projet a été comprise et non simplement copiée
- Le code est versionné avec Git et sauvegardé sur un dépôt GitHub, avec un historique de commits clair
