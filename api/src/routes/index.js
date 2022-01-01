const { Router } = require("express");
const { Videogame, Genre, API_KEY } = require("../db.js");
const fetch = require("cross-fetch"); //uso cross-fetch que me permite usar el fetch
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const gamesRouter = require("./games")
const genresRouter = require("./genres")
const platformsRouter = require("./platforms")


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', gamesRouter)
router.use('/videogame', gamesRouter)
router.use('/genres', genresRouter)
router.use('/platforms', platformsRouter)

module.exports = router;
