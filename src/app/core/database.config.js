const mongoose = require('mongoose');

const { MONGO_DB_URL, DB_NAME } = require('./app.config');

const uri = `${MONGO_DB_URL}/${DB_NAME}`

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});