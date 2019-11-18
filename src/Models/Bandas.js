const mongoose = require('../Database/index')

const BandaSchema = new mongoose.Schema({
    nomeBanda: { type: String },
    musicasFamosas: [
        {
            nomeMusica: { type: String },
            linkYoutube: { type: String }
        }
    ]
})

const Bandas = mongoose.model('Bandas', BandaSchema)

module.exports = Bandas