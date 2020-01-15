//Message Model
const db = require('./config');
const mongoose = require('mongoose');


let MessageSchema = new mongoose.Schema({
  id: Number,
  name: String,
  message: String
})

const Message = mongoose.model('Message', MessageSchema, 'messages')
//mongoose.model('Message', new MessageSchema) ?

module.exports = Message;