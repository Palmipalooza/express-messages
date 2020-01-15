const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Message = require('./db/Message');

app.use(bodyParser.json());//


// create a message `/api/messages`
app.post('/api/messages', async (req, res) => {

  const result = await Message.create(req.body);
  res.send('message received')

})
// retrieve a list of all messages (output should be an array of objects)`/api/messages`
app.get('/api/messages', async (req, res) => {

  const result = await Message.find()
  res.send(result)
  return result;

})

// get one specific message  `/api/messages/1`
//app.get invoke findbyid

// update a specific message `/api/messages/1`
//app.METHOD(update)

// delete a specific message `/api/messages/1`
//app.METHOD(delete)

app.use((req, res, next) => {
  res.status(404).send('That route does not exist');
});

const port = 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;