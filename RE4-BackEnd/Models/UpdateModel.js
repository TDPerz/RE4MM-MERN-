const mongo = require('mongoose')

const update = new mongo.Schema({
    version:String,
    download:String
})

update.statics.getUpdate = async function(){
    const up = await this.findOne();
    return up
}

module.exports = mongo.model('Update', update)