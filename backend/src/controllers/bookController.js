const Book = require("../models/Book");

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books)
  } catch (error) {
    res.json({message: error.message})
  }
}

exports.getBookById = async (req,res) => {
  try {
    const book = await Book.findById(req.params.id)

    if(!book)
    {
      return res.status(404).json({
        message: "Livre introuvable"}) 
    }

    res.json(book);
  } catch (error) {
    
  }
}

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create({
      ...req.body,
      owner: req.user.id
    });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findById(
      req.params.id
    )

    if(!book){
      return res.status(404).json({message : "Livre introuvable"})
    }

    if(book.owner.toString() !== req.user.id && req.user.role !== "admin"){
      return res.status(403).json({
        message: "Accès non autorisé"
      })
    }

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true}
    )

    res.json(updatedBook);
  } catch (error) {
    res.json({message: error.message});
  }
}

exports.deleteBook = async (req, res) =>{
  try {
    const book = await Book.findById(req.params.id);
    if(!book)
    {
      return res.status(404).json({
        message: 'Livre introuvable'
      })
    }

    if(book.owner.toString() !== req.user.id && req.user.role !== "admin"){
      return res.status(403).json({message: "Vous n'êtes pas autorisé à supprimer un livre"})
    }

    await book.deleteOne();

    res.json({message: "Livre supprimé"})
  } catch (error) {
    res.json({message: error.message});
  }
}
