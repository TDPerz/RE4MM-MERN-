require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const update = require('./Models/UpdateModel')
const app = express()

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || '4000'


mongoose.connect(process.env.MONGOCLUSTER, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("ERROR!!!!")
    console.log(err)
})

//Routes    

app.use(require('./Routes/ModeRoute'))

app.get('/update', async (req, res)=>{
    var upd = await update.getUpdate()
    if(upd){
        res.send({Status:0, Mensaje:"Actualizacion", update:upd})
    }
    else{
        res.send({Status:0, Mensaje:"No hay actualizacion", update:null})
    }
})

app.listen(port, host, ()=>{
    console.log('Servidor Iniciado!!')
})