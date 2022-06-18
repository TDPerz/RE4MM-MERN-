const express = require('express')
const mod = require('../Models/Mods')
const routes = express.Router();

routes.get('/mods', async(req,res)=>{
    var mods = await mod.getMods()
    if(mods == null){
        res.json({Status:-1, Mensaje:"Archivos no encontrados", Mods:[]})
    }
    else{
        res.json({Status:0, Mensaje:"Archivos encontrados", Mods: mods})
    }
})

module.exports = routes