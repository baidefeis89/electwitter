const userServiceStart = require('./user.service');
const twitServiceStart = require('./twit.service');

function initializeServices() {
  userServiceStart();
  twitServiceStart();
}

module.exports = initializeServices;