
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const url = require('url');

let mainWindow;


function createWindow() {

  mainWindow = new BrowserWindow({ width: 540, height: 960, alwaysOnTop: false });

  const buildPath = path.join(__dirname, '/build/index.html');
  const buildUrl = url.format({ pathname: buildPath, protocol: 'file:', slashes: true });
  const startUrl = process.env.ELECTRON_START_URL || buildUrl;

  mainWindow.loadURL(startUrl);

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

}//createWindow


app.on('ready', createWindow);


app.on('window-all-closed', function () {
  app.quit();
});