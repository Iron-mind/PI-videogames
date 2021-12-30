const { default: fetch } = require('cross-fetch')
let {Platform, API_KEY}= require('../db')
const linkApi = ' https://api.rawg.io/api'

let {Router}= require('express')

const router = Router()

router.get('/',async (req,res)=> {
    try {
        let PlatformsInDB = await Platform.findAll()
        res.json(PlatformsInDB)
    } catch (error) {
      console.log(error);
        res.status(400).json(error)
    }

})
module.exports = router
