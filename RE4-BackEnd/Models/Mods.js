const mongo = require('mongoose')

const modSchema = new mongo.Schema({
    titulo:String,
    descripcion:String,
    miniatura:String,
    link:String,
    type:String
})

modSchema.statics.getMods = async function(){
    const all = await this.find()
    if(all.length == 0){
        return null
    }
    else{
        return all
    }
}

module.exports = mongo.model('Mods', modSchema)