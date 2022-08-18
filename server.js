//importing express, connection and routes
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

//setting port and initializing app
const PORT = 3001;
const app = express();
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//telling express to use routes
app.use(routes);
//once the db is connected THEN express starts
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});