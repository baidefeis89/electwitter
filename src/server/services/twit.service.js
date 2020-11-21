const { ipcMain } = require('electron');
const { net } = require('electron');
const { BEARER_TOKEN } = require('../constants.json');

function start() {
  ipcMain.on('getTimeline', (event, arg) => {
    let data = '';
    event.reply('timelineUpdated', null);

    const request = net.request({
      method: 'GET',
      url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${arg}&count=20`,
      headers: {
        authorization: `Bearer ${BEARER_TOKEN}`
      }
    });

    request.on('response', res => {
      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        event.reply('timelineUpdated', JSON.parse(data));
      });
      
      res.on('error', (e) => console.log('error', e));
    });

    request.end();
    
  })
}

module.exports = start;
