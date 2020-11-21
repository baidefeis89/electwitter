const { ipcMain } = require('electron');
const { net } = require('electron');
const { BEARER_TOKEN } = require('../constants.json');

function start() {
  ipcMain.on('getUserData', (event, arg) => {
    event.reply('userDataUpdated', null);

    let data = '';
    const request = net.request({
      method: 'GET',
      url: `https://api.twitter.com/1.1/users/show.json?screen_name=${arg}`,
      headers: {
        authorization: `Bearer ${BEARER_TOKEN}`
      }
    });

    request.on('response', res => {
      res.on('data', chunk => {
        data += chunk
      });

      res.on('end', () => {
        event.reply('userDataUpdated', JSON.parse(data));
      });

      res.on('error', (e) => console.log('error', e));
    });

    request.end();
  })
}

module.exports = start;
