const dotenv = require('dotenv');

const path = `./${process.env.NODE_ENV}/.env`;

dotenv.config({ path: path });

module.exports = {
  PORT: process.env.PORT,
  MONGO_DB_URL: process.env.MONGO_DB_URL,
  DB_NAME: process.env.DB_NAME
};
