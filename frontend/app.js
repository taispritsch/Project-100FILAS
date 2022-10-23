const { app, BrowserWindow, ipcMain } = require('electron')

const establishmentScreen = 'listOfEstablishments'
const establishmentProducts = 'establishment'

// modify your existing createWindow() function
const createWindow = (screenName, content) => {
   // TESTAR O SWITCH CASE PARA O LOADFILE!!!!!
   switch (screenName){
      case establishmentScreen:
         const listOfEstablishmentWindow = new BrowserWindow({
            width: 1400,
            height: 720,
            webPreferences: {nodeIntegration: true},
            show: true
         })
         listOfEstablishmentWindow.openDevTools();
         listOfEstablishmentWindow.loadFile('./src/pages/index/index.html')
         break;
      case establishmentProducts:
         const listOfProductsInEstablishment = new BrowserWindow({
            width: 1400,
            height: 720,
            webPreferences: {nodeIntegration: true},
            show: true
         })
         listOfProductsInEstablishment.openDevTools();
         listOfProductsInEstablishment.loadFile('./src/pages/products/products.html')
         listOfProductsInEstablishment.webContents.on('did-finish-load', e => {
         listOfProductsInEstablishment.webContents.send("establishment", content)
         })
         break;
      default:
         const loginClientWindow = new BrowserWindow({
            width: 1400,
            height: 720,
            webPreferences: {nodeIntegration: true}
         })
         loginClientWindow.loadFile('./src/pages/clientLogin/clientLogin.html')
         // loginClientWindow.webContents.openDevTools();
         break;
   }
}

ipcMain.on('nextStep', (e, args) => {
   if(args.nome){
      createWindow(establishmentScreen)
   }
})

ipcMain.on('establishment', (e, args) => {
   if(args.estabelecimento){
      createWindow(establishmentProducts, args.estabelecimento);
   }
})

app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
   createWindow()

   app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
   })
})