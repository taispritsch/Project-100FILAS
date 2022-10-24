const {ipcRenderer} = require('electron');

//BUSCA OS ESTABELECIMENTOS DO BANCO
async function getEstablishments() {
   let url = 'http://localhost:8080/listarEstabelecimentos';
   try {
       let res = await fetch(url);
       return await res.json();
   } catch (error) {
       console.log(error);
   }
}

async function getEstablishment(id){
   let url = 'http://localhost:8080/listarEstabelecimento/'+id;
   try {
       let res = await fetch(url);
       return await res.json();
   } catch (error) {
       console.log(error);
   }
}

// RENDERIZA OS ESTABELECIMENTOS EM TELA
async function renderEstablishments() {
   let establishments = await getEstablishments();
   let html = '';
   establishments.estabelecimentos.map(establishment => {
       let htmlSegment = `
         <div class="card-establishment" data-id="${establishment.id}">
            <img src="../../assets/teste.jpg" alt="teste" />
            <div class="establishment-data">
               <h4>Nome:  <span>${establishment.nome}</span></h4>
               <p>Email: <span>${establishment.email}</span></p>
               <p>Telefone:  <span>${establishment.telefone}</span></p>
               <p>Descrição:  <span>${establishment.descricao}</span></p>
            </div>
         </div>`;

       html += htmlSegment;
   });

   let container = document.querySelector('.card-container');
   container.innerHTML = html;

   let establishmentCards = document.getElementsByClassName('card-establishment');
   for(let count = 0; count < establishmentCards.length; count++) {
      establishmentCards[count].addEventListener('click', e => {
         navigateToEstablishment(e.path[1].getAttribute('data-id'));
      })
   }
   // CRIA O CARROSSEL COM ESTABELECIMENTOS
   $('.card-container').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
   });
}
renderEstablishments()

async function navigateToEstablishment(id){
   let establishment = await getEstablishment(id);
   ipcRenderer.send('establishment', establishment);
   window.location.href = '../products/products.html';
}

// REALIZA O FILTRO POR ESTABELECIMENTO
let search = document.getElementById('search');
let feedbackSearch = document.getElementById('feedback-search');
let cardContainer = document.getElementsByClassName('card-container')[0];
search.addEventListener('keyup', e => {
	Array.from(document.getElementsByClassName('card-establishment')).map( item => {
      let establishmentByName = item.children[1].children[0].children[0];
		let hasMatch = establishmentByName.innerText.toLowerCase().includes(search.value);
		item.style.display = hasMatch ? 'unset': 'none';
      feedbackSearch.style.display = hasMatch ? 'none' : 'block';
      cardContainer = hasMatch ? 'none' : 'block';
	})
})

// COMPORTAMENTO DO SEARCH AO TIRAR O FOCO DO INPUT
search.addEventListener('focusout', e => {
   e.target.value.length > 0 ? e.target.style.color = 'transparent' : '';
})

// COMPORTAMENTO DO SEARCH AO COLOCAR O FOCO NO INPUT
search.addEventListener('focus', e => {
   e.target.value.length > 0 ? e.target.style.color = 'black' : '';
})



