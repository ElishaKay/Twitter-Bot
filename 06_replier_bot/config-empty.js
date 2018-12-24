// Change this file to config.js
// Add your keys
// Add file .gitignore: config.js
// Load with 
// var config = require('./config.js');

module.exports = {
  consumer_key: process.env.CONSUMER_KEY, 
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
}