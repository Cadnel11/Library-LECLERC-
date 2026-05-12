require('dotenv').config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // Import de db.js

const app = express();

const Blog = require('./models/Book')

const bookRoutes = require('./routes/bookRoutes')

const authRoutes = require("./routes/authRoutes")


connectDB();


app.use(cors());
app.use(express.json());
app.use("/api/books", bookRoutes);
app.use('/api/auth', authRoutes);


app.get("/health", (req, res) =>{
  res.json({status: 'OK'})
  console.log('Tout est ok')
});

app.get("/", (req, res) => {
  res.json({ message: "API Library Management opérationnelle" });
});




const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});