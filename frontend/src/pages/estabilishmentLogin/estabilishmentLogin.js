const {ipcRenderer} = require('electron');

let formEstabilishment = document.getElementById('formLoginEstabilishment');
formEstabilishment.addEventListener('submit', (e) => {
   e.preventDefault();
   const data = new FormData(e.target);
   const dataJSON = Object.fromEntries(data.entries());
   ipcRenderer.send('nextStep', dataJSON);
   window.location.href = '../indexEstabilishment/indexEstabilishment.html';
});
