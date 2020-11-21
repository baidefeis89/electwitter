const { app, BrowserWindow } = require('electron');
const path = require('path');


const isDev = require('electron-is-dev');
const bootstrap = require('./server');

try {
  require('electron-reloader')(module);
} catch (_) {}

function createWindow() {
  const window = new BrowserWindow({
    width: 800,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (isDev) {
    window.loadURL('http://localhost:3000');
    window.webContents.openDevTools();
  } else {
    window.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
  }
}

app.whenReady()
  .then(createWindow)
  .then(bootstrap);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


