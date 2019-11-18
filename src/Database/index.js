const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:root@cluster0-3stou.mongodb.net/bandas?retryWrites=true&w=majority')

mongoose.Promise = global.Promise

module.exports = mongoose