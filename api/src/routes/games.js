const { Router } = require("express");
const { Videogame, Genre,Platform, API_KEY } = require("../db.js");
const { Op } = require("sequelize");
const fetch = require("cross-fetch");
//const episodesRouter = require("./episodes")
const linkApi = " https://api.rawg.io/api/games";
let router = Router();

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
           include: [Genre,Platform]
         });
          return res.json([...gamesFounded,...gamesInapi.results])
      }


      let gamesFounded = await Videogame.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: [Genre,Platform]
      });
      res.status(200).json([...gamesFounded, ...gamesInapi.results]);


    }  else {
      if (!order) {
        let games = await Videogame.findAll({
          include: [Genre,Platform]
        });
        return res.status(200).json(games);
      }


      let games2 = await Videogame.findAll({
        order: order=="alph"?[
         ["name","DESC"]
         ]:[["rating","ASC"]],

        include: [Genre,Platform]
      });
       res.status(200).json([...games2]);
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
    var apiGame = await fetch(linkApi + "/" + id + "?key=" + API_KEY).then(
      (data) => data.json()
    );
    let game = await Videogame.findOne({ where: { id: id }, include: [Genre,Platform] });
    game.platforms = apiGame.platforms;
    res.json(game);
  } else {
    res.send(apiGame);
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
      return Genre.findOne({
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
