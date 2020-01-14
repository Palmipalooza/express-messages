const express = require('express');
const app = express();
const Message = require('./db/Message');

app.use((req, res, next) => {
  res.status(404).send('That route does not exist');
});

/*
add these methods: (with HTTP GET, POST, PUT, etc)
  create a message /api/messages
  retrieve a list of all messages (output should be an array of objects)/api/messages
  update a specific message /api/messages/1
  delete a specific message /api/messages/1
  get one specific message /api/messages/1
*/


app.get('/api/messages', (req, res) => {
  //invoke function in db to get all messages
  // getall()
    // .then(results => res.send(results))
})

const port = 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
