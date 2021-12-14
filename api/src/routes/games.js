const { Router } = require("express");
const { Videogame, Genre, API_KEY } = require("../db.js");
const { Op } = require("sequelize");
const fetch = require("cross-fetch");
//const episodesRouter = require("./episodes")
const linkApi = " https://api.rawg.io/api/games";
let router = Router();

router.get("/", async (req, res, next) => {
  try {
    let { name } = req.query;
    if (name) {
      let gamesInapi = await fetch(
        linkApi + "?search=" + name + "&key=" + API_KEY
      ).then((data) => data.json());
      let gamesFounded = await Videogame.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: Genre,
      });
      res.status(200).json([...gamesFounded, ...gamesInapi.results]);
    } else {
      let games = await Videogame.findAll({
        include: Genre,
      });
      res.status(200).json(games);
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
    let game = await Videogame.findOne({ where: { id: id }, include: Genre });
    game.platforms = apiGame.platforms;
    res.json(game);
  } else {
    res.send(apiGame);
  }
});

router.post("/", async function (req, res) {
  try {
    let savingGame = req.body;
    let gameInDB = await Videogame.create(savingGame);

    let promises = savingGame.genres.map((g) => {
      return Genre.findOne({
        where: { name: g },
      });
    });
    const genresSaved = await Promise.all(promises);
    await gameInDB.addGenres(genresSaved);
    res.json(gameInDB);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
