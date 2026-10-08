const path = require("node:path")
const { BrowserWindow, app } = require("electron")

if(require('electron-squirrel-startup')) app.quit();

const createWindow = () => {
    const newWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        useContentSize: true
    });
    newWindow.loadFile(path.join(__dirname, "index.html"));
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    })
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
});
