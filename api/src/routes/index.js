const { Router } = require("express");
const { Videogame, Genre, API_KEY } = require("../db.js");
const { Op } = require('sequelize');
const fetch = require("cross-fetch"); //uso cross-fetch que me permite usar el fetch
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/games", async (req, res) => {

  try {

    await Videogame.findOrCreate({
      where: { name: 'Juegardo'},
      defaults: {

        rating: 3.5,
        description: 'Un juego para locos',
        released:'20-21-12',
        background_image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpm1.narvii.com%2F6954%2Fe77aa2d220c2800e65d5b150cc2e416a9bb06320r1-1138-640v2_hq.jpg&f=1&nofb=1'
      }
  })

    let g= await Videogame.findOne({
      where: {
        name: {
          [Op.iLike]: `%Juegardo%`,
        },
      },
    });


    let eso = await Genre.create({
      name:'severo'
    })

    await g.addGenre(eso)

    res.status(200).json([eso,g]);
  } catch (err) {
    console.error(err, typeof eso)
    res.status(400).json([eso,g]);
  }
});

module.exports = router;
