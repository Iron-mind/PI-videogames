const { Router } = require("express");
const { Videogame, Genre,Platform, API_KEY } = require("../db.js");
const { Op } = require("sequelize");
const fetch = require("cross-fetch");
//const episodesRouter = require("./episodes")
const linkApi = " https://api.rawg.io/api/games";
let router = Router();
let genreIncluded = {
    model: Genre,
    attributes: ['name'],
     through: {
       attributes: []
     }
  }
let platformIncluded = {
    model: Platform,
    attributes: ['name'],
     through: {
       attributes: []
     }
  }


router.get("/", async (req, res, next) => {
  try {
    let { name, order ,orderby} = req.query;

    if (name) {
      let gamesInapi = await fetch(
        linkApi + "?search=" + name + "&key=" + API_KEY
      ).then((data) => data.json());

       if(order){
         let gamesFounded = await Videogame.findAll({
           order: order=="alph"?[
            ['name', orderby],
            ]:[
            ['rating', orderby],
            ],
           where: {
             name: {
               [Op.iLike]: `%${name}%`,
             }
           },
           include: [genreIncluded,platformIncluded]
         });
          return res.json([...gamesFounded,...gamesInapi.results])
      }


      let gamesFounded = await Videogame.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: [genreIncluded,platformIncluded]
      });
      res.status(200).json([...gamesFounded, ...gamesInapi.results]);


    }  else {
      if (!order) {
        let games = await Videogame.findAll({
          include: [genreIncluded,platformIncluded]
        });
        return res.status(200).json(games);
      }


      let games2 = await Videogame.findAll({

        order: order=="alph"?[
        ['name', orderby],
        ]:[
        ['rating', orderby],
        ],
         include: [genreIncluded,platformIncluded]
      });

         return res.status(200).json([...games2])

    }
  } catch (err) {
    console.error(err);
    res.status(400).json("Error");
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  //regex de uuid
  const regex = /(\w+\-){4}\w+/g;

  if (regex.test(id)) {

    let game = await Videogame.findOne({ where: { id: id }, include: [genreIncluded,platformIncluded] });

    res.json(game);
  } else {
    var apiGame = await fetch(linkApi + "/" + id + "?key=" + API_KEY).then(
      (data) => data.json()
    );
    res.json(apiGame);
  }
});

router.post("/", async function (req, res) {
  try {
    let gameToSave = req.body;
    let gameInDB = await Videogame.create(gameToSave);

    let promises = gameToSave.genres.map((g) => {
      return Genre.findOne({
        where: { name: g },
      });
    });

    let promises2 = gameToSave.platforms.map((p) => {
      return Platform.findOne({
        where: { name: p },
      });
    });



    const genresSaved = await Promise.all(promises);
    const platformsSaved = await Promise.all(promises2);

    await gameInDB.addGenres(genresSaved);
    await gameInDB.addPlatforms(platformsSaved);

    res.json(gameInDB);
  } catch (error) {
    console.log(error);
    res.status(400).send('error saving')
  }
});
module.exports = router;
