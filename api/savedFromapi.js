const fetch = require("cross-fetch"); //uso cross-fetch que me permite usar el fetch
const { Videogame, Genre, API_KEY, conn } = require("./src/db");
const { Op } = require("sequelize");
var videoGames = [];
var genres = new Set();

async function guardarEnBase(gameList) {
  async function saveGame(game) {
    let gameInDataBase = await Videogame.findOrCreate({
      where: { name: game.name },
      defaults: {
        rating: game.rating,
        description: game.description,
        released: game.released,
        background_image: game.background_image,
      },
    });

    //console.log('game///',game.name, game.genres[0].name);
    return gameInDataBase;

    // return  Genre.findOrCreate({
    //     where: {
    //         name:  'Action'
    //     }
    // }).then(genreInDatabase=>gameInDataBase.addGenre(genreInDatabase))

    // return gameInDataBase.addGenre(genreInDatabase)
  }

  let promises = gameList.map(saveGame);

  const result = await Promise.all(promises);
  return result;
}

async function traerUnoPorUno(gamesIds) {
  function reqById(id) {
    return fetch(`https://api.rawg.io/api/games/${id}?key=` + API_KEY)
      .then((res) => res.json())
      .then((data) => {
        videoGames.push(data);
        if (videoGames.length === 100) {
          console.log(videoGames[0].name);
          console.log(guardarEnBase(videoGames));
        }
      })
      .catch((err) => console.log(err));
  }

  await gamesIds.map((id) => {
    return reqById(id);
  });
}
function updateFromApi() {
  var idsFromAPI = [];
  let games = [];
  //primero me traigo los ids
  function getIDsFromAPIPage(page) {
    return fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=` + page)
      .then((res) => res.json())
      .then((data) => {
        let i = 0;
        // 19 video games in the other api per page
        while (i < data.results.length) {
          idsFromAPI.push(data.results[i].id);

          i++;
        }
        if (idsFromAPI.length === 100) {
          traerUnoPorUno(idsFromAPI);
        }
      })
      .catch((err) => console.log(err));
  }

  let pages = [1, 2, 3, 4, 5]; //primeras 5 paginas para los cien
  pages.map((p) => {
    return getIDsFromAPIPage(p);
  });
}

async function saveGenre(gameName, genreName) {
  try {
    let g = await Videogame.findOne({
      where: {
        name: {
          [Op.iLike]: `%${gameName}%`,
        },
      },
    });

    const [genreInDB, created] = await Genre.findOrCreate({
      where: { name: genreName },
    });

    return g.addGenre(genreInDB);
  } catch (err) {
    console.error(err);
  }
}

async function saveGenres(gameName, genres) {
  try {
    let promeses = genres.map((genre) => {
      return saveGenre(gameName, genre.name);
    });

    return promeses
  } catch (e) {
    console.log(e);
  }
}
//saveGenre('brutal legend', 'Action')
updateFromApi();

setTimeout(function () {
  videoGames.map((g) => {
    return saveGenres(g.name, g.genres);
  });
  //saveGenre('brutal legend', 'Action')
  console.log(videoGames.length);
}, 10000);
