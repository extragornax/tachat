const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

function createWindow () {
    win = new BrowserWindow({width: 1280, height: 720})
    win.loadURL(url.format ({
        pathname: path.join('resources', 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
}

app.on('ready', createWindow)
