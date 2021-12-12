const { Router } = require("express");
const { Videogame, Genre, API_KEY } = require("../db.js");
const { Op } = require('sequelize');

//const episodesRouter = require("./episodes")

let router = Router()


router.get("/", async (req, res, next) => {

    try {
      let {name}= req.query
      if(name){
          let gamesFounded = await Videogame.findAll({
              where: {
                  name:{
                      [Op.iLike]: `%${name}%`
                  }
              },
              include: Genre
          })
          res.status(200).json(gamesFounded)
      }else{
        let games= await Videogame.findAll({
            include: Genre
          })
          res.status(200).json(games);

      }
      
    } catch (err) {
      console.error(err)
      res.status(400).json('Error');
    }
  });
  
module.exports = router 