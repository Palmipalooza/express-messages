//Message Model
const db = require('./config');

let MessageSchema = new db.Schema({
  id: Number,
  name: String,
  message: String
})

/*
add these methods:
  create a message /api/messages
  retrieve a list of all messages (output should be an array of objects)/api/messages
  update a specific message /api/messages/1
  delete a specific message /api/messages/1
  get one specific message /api/messages/1
*/

const Message = null; //when methods are added, replace this line with:
//const Message = db.model('Message', MessageSchema)

module.exports = Message;