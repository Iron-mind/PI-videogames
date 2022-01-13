const { default: fetch } = require('cross-fetch')
let {Genre, API_KEY}= require('../db')
const linkApi = ' https://api.rawg.io/api'

let {Router}= require('express')

const router = Router()

router.get('/',async (req,res)=> {
    try {
        // let genresInAPI = await fetch(linkApi+'/genres?key='+API_KEY).then(data=> data.json())
        // res.send(genresInAPI.results)

        Genre.findAll()
        .then(generos=>{
          res.json(generos)
        })

    } catch (error) {
        res.status(400).json(error)
    }

})
module.exports = router
