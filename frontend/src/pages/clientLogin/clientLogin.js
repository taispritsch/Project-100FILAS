const {ipcRenderer} = require('electron');
sessionStorage. clear();
let formClient = document.getElementById('formLogin');
formClient.addEventListener('submit', (e) => {
   e.preventDefault();
   const data = new FormData(e.target);
   const dataJSON = Object.fromEntries(data.entries());
   ipcRenderer.send('nextStep', dataJSON);
   sessionStorage.setItem('cliente', JSON.stringify(dataJSON));
   window.location.href = '../index/index.html';
});

function loginEstablishment(){
   window.location.href = '../estabilishmentLogin/estabilishmentLogin.html';
}