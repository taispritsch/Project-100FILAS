const {ipcRenderer} = require('electron');
let estabilishments;
sessionStorage. clear();
async function renderEstablishments() {
   estabilishments = await getEstabilishments();
   console.log(estabilishments);
}

renderEstablishments()


let formEstabilishment = document.getElementById('formLoginEstabilishment');
formEstabilishment.addEventListener('submit', (e) => {
   sessionStorage.setItem('estabelecimento', '');
   e.preventDefault();
   const data = new FormData(e.target);
   const dataJSON = Object.fromEntries(data.entries());
   for(let i = 0; i < estabilishments.estabelecimentos.length; i++) {
      if(estabilishments.estabelecimentos[i].email == dataJSON.email){
      // if(estabilishments.estabelecimentos[i].email == dataJSON.email && estabilishments.estabelecimentos[i].senha == dataJSON.password){
         sessionStorage.setItem('estabelecimento', estabilishments.estabelecimentos[i].id);
         window.location.href = '../indexEstabilishment/indexEstabilishment.html';
         return true;
      }
   }

   if(JSON.parse(sessionStorage.getItem('estabelecimento') == '')){
      alert('Email ou senha Incorretos');

   }
});

async function getEstabilishments() {
   let url = 'http://localhost:8080/listarEstabelecimentos';
   try {
       let res = await fetch(url);
       return await res.json();
   } catch (error) {
       console.log(error);
   }
}
