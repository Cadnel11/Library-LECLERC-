const express = require('express')

const {body} = require('express-validator');

const validate = require("../middlewares/validate");

const router = express.Router();

const {getBooks, createBook, updateBook, getBookById, deleteBook} = require('../controllers/bookController')

const auth = require ("../middlewares/auth")

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/",[
  body("title").notEmpty().withMessage("Titre exigé"),
  body("author").notEmpty().withMessage('Auteur exigé')
], auth,validate, createBook);
router.put("/:id", auth, updateBook);
router.delete("/:id", auth, deleteBook);

module.exports = router;