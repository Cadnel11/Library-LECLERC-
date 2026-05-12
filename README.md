# Library Management API

API REST sécurisée développée avec Node.js, Express et MongoDB.

## Technologies

* Node.js
* Express
* MongoDB
* JWT
* bcryptjs

---

## Installation

```bash
git clone <repo-url>
cd backend
npm install
npm run dev
```

---

## Variables d'environnement

Créer `.env`

```env
PORT=5010
MONGO_URI=mongodb://127.0.0.1:27017/libraryDB
JWT_SECRET=monSuperSecret123
```

---

## Endpoints

### Auth

#### Register

POST `/api/auth/register`

Body:

```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

---

#### Login

POST `/api/auth/login`

Body:

```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

---

### Books

#### Liste publique

GET `/api/books`

---

#### Ajouter livre

POST `/api/books`

Headers:

```http
Authorization: Bearer TOKEN
```

Body:

```json
{
  "title": "Node.js",
  "author": "Cadnel"
}
```

---

#### Modifier

PUT `/api/books/:id`

---

#### Supprimer

DELETE `/api/books/:id`

---

## Sécurité

* Hash des mots de passe
* Auth JWT
* Contrôle propriétaire/admin
* Validation des entrées
