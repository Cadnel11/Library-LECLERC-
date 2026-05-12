# Library Management API

API REST sécurisée de gestion de bibliothèque développée avec **Node.js**, **Express** et **MongoDB**.

Elle permet :

* l'inscription et la connexion sécurisée des utilisateurs
* l'authentification via JWT
* la gestion des livres
* le contrôle d'accès par rôle (User / Admin)
* la protection des ressources par propriétaire

---

# Technologies utilisées

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* express-validator

---

# Installation

## Cloner le projet

```bash
git clone <repo-url>
cd library-management/backend
```

---

## Installer les dépendances

```bash
npm install
```

---

## Configurer les variables d'environnement

Créer un fichier `.env`

```env
PORT=5010
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=monSuperSecret123
```



---

## Lancer le serveur

```bash
npm run dev
```

Serveur disponible sur :

```text
http://localhost:5010
```

---

# Endpoints API

---

# Authentification

## Register

Créer un utilisateur

### Requête

```http
POST /api/auth/register
```

### Body

```json
{
  "email": "user1@test.com",
  "password": "123456"
}
```

### Réponse

```json
{
  "message": "Utilisateur créé"
}
```

---

## Login

Connexion utilisateur

### Requête

```http
POST /api/auth/login
```

### Body

```json
{
  "email": "user1@test.com",
  "password": "123456"
}
```

### Réponse

```json
{
  "token": "JWT_TOKEN"
}
```

---

## Profile

Utilisateur authentifié

### Requête

```http
GET /api/auth/profile
```

### Headers

```http
Authorization: Bearer JWT_TOKEN
```

---

# Livres

## Récupérer tous les livres

```http
GET /api/books
```

---

## Récupérer un livre

```http
GET /api/books/:id
```

Exemple :

```http
GET /api/books/683f91b8a7f5c8d21f7e1234
```

---

## Ajouter un livre

```http
POST /api/books
```

### Headers

```http
Authorization: Bearer JWT_TOKEN
```

### Body

```json
{
  "title": "Node.js",
  "author": "Cadnel",
  "isbn": "9781234567890"
}
```

---

## Modifier un livre

```http
PUT /api/books/:id
```

### Headers

```http
Authorization: Bearer JWT_TOKEN
```

---

## Supprimer un livre

```http
DELETE /api/books/:id
```

### Headers

```http
Authorization: Bearer JWT_TOKEN
```

---

# Sécurité

L'API implémente :

* Hash sécurisé des mots de passe avec bcryptjs
* Authentification JWT
* Vérification des tokens
* Validation des entrées
* Contrôle propriétaire des livres
* Gestion des rôles utilisateur / admin

---

# Règles d'accès

## Utilisateur standard

Peut :

* créer un livre
* modifier ses livres
* supprimer ses livres

Ne peut pas :

* modifier les livres des autres utilisateurs

---

## Administrateur

Peut :

* gérer tous les livres
* modifier n'importe quel livre
* supprimer n'importe quel livre

---

# Tests avec Postman

Ajouter le header suivant pour les routes protégées :

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# Auteur

Projet développé par Cadnel BLENON
