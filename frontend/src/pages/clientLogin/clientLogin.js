const {ipcRenderer} = require('electron');

let formClient = document.getElementById('formLogin');
formClient.addEventListener('submit', (e) => {
   e.preventDefault();
   const data = new FormData(e.target);
   const dataJSON = Object.fromEntries(data.entries());
   ipcRenderer.send('nextStep', dataJSON);
});