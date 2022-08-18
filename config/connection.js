//boilers plate importing connect and connection from mongoose object and also setting the DB name
const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;