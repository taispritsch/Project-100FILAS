const { app, BrowserWindow } = require('electron')

// modify your existing createWindow() function
const createWindow = () => {
   const win = new BrowserWindow({
      width: 1400,
      height: 720,
      webPreferences: {}
   })
   win.webContents.openDevTools()
   
   // win.loadFile('./src/pages/index/index.html')
   // win.loadFile('./src/pages/estabilishment/establishment.html')
   win.loadFile('./src/pages/clientLogin/clientLogin.html')
}


app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
   createWindow()

   app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
   })
})