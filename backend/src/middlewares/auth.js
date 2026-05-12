require("dotenv").config();

const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  try {
    // 1. Récupérer le token dans le header Authorization
    const authHeader = req.header("Authorization");

    if(!authHeader)
    {
      return res.status(401).json({message: "Accès refusé"});
    }

    const token = authHeader.split(" ")[1];

    // 2. Vérifier le token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // 3. Ajouter l'ID utilisateur à la requête pour les prochaines fonctions

    req.user = decoded

    // 4. Passer au middleware suivant

    next()

  } catch (error) {
    res.status(401).json({ error: 'Requête non authentifiée !' })
  }
}