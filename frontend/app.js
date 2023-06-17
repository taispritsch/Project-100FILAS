const { app, BrowserWindow, ipcMain, Tray } = require('electron');

const establishmentScreen = 'listOfEstablishments'
const establishmentProducts = 'establishment'
var mainScreen;
function init(){
   mainScreen = new BrowserWindow({
      width: 1400,
      height: 720,
      icon: './src/public/icon.png',
      webPreferences: {nodeIntegration: true}
   })

   mainScreen.loadFile('./src/pages/homepage/homepage.html')
   // mainScreen.loadFile('./src/pages/clientLogin/clientLogin.html');
   // mainScreen.loadFile('./src/pages/estabilishment/products-list.html');
   //mainScreen.loadFile('./src/pages/clientLogin/clientLogin.html');
   // mainScreen.loadFile('./src/pages/estabilishmentLogin/estabilishmentLogin.html');
   mainScreen.openDevTools();
}
// modify your existing createWindow() function
const createWindow = (screenName, content) => {
   // TESTAR O SWITCH CASE PARA O LOADFILE!!!!!
   switch (screenName){
      case establishmentScreen:
         // TELA INDEX AQUI
         break;
      case establishmentProducts:
         mainScreen.loadFile('./src/pages/products/products.html')
         mainScreen.webContents.on('did-finish-load', e => {
         mainScreen.webContents.send("establishment", content)
         })
         break;
      default:
         mainScreen.loadFile('./src/pages/clientLogin/clientLogin.html')
         break;
      }
      // mainScreen.openDevTools();
}

ipcMain.on('nextStep', (e, args) => {
   if(args.nome){
      createWindow(establishmentScreen)
   }
})

ipcMain.on('establishment', (e, args) => {
   createWindow(establishmentProducts, args.estabelecimento);
})

app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
   init()

   app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) init()
   })
})