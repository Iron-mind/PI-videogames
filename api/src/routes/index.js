const { Router } = require("express");
const { Videogame, Genre, API_KEY } = require("../db.js");
const fetch = require("cross-fetch"); //uso cross-fetch que me permite usar el fetch
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const gamesRouter = require("./games")

// TODO: finish another routers

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', gamesRouter)

module.exports = router;
