const mongoose = require('mongoose');

//console.log('is my database good to go?');

module.exports = mongoose.connect('mongodb://localhost:27017/messages', {useNewUrlParser: true, useUnifiedTopology: true});