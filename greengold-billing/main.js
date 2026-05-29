const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: 'Green Gold Billing Software',
    webPreferences: {
      nodeIntegration: false
    }
  })
  win.loadFile('GreenGoldBilling_v4.html')
  win.setMenuBarVisibility(false)
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit())
