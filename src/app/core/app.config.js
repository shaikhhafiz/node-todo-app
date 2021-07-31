const dotenv = require('dotenv');

dotenv.config({ path: `./${process.env.NODE_ENV}/.env` });

module.exports = {
  PORT: process.env.PORT,
  MONGO_DB_URL: process.env.MONGO_DB_URL,
  DB_NAME: process.env.DB_NAME
};
