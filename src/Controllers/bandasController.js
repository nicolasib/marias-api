const Bandas = require('../Models/Bandas')

module.exports = {
    async store(req, res){
        const banda = req.body

        try{
            const addBanda = await Bandas.create(banda)
            return res.json({ "response": "success" })
        }catch(error){
            return res.status(400).json({ error })
        }
    },

    async index(req, res){
        const { argumentos } = req.body

        try{
            let testArgs = await Bandas.find({ nomeBanda: argumentos })
            if(testArgs.length >= 1){
                const result = await Bandas.find({ nomeBanda: argumentos })
                res.status(200).json(result)
            }else{
                testArgs = await Bandas.find({ "musicasFamosas.nome": argumentos })
            }
            if(testArgs.length >= 1){
                const result = await Bandas.find({ "musicasFamosas.nome": argumentos })
                const musica = result[0].musicasFamosas.filter(data => {
                    if(data.nomeMusica === argumentos) return data
                })
                const final = {
                    banda: result[0].nomeBanda,
                    musica
                }
                res.status(200).json(final)
            }else if(argumentos === 'all'){
                const result = await Bandas.find()
                res.status(200).json(result)
            }else{
                res.status(404).json({ error: 'not found' })
            }
        }catch(error){
            console.log(error)
        }
    }
    
}