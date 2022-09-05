// BUSCA OS ESTABELECIMENTOS DO BANCO
async function getEstablishment() {
   let url = 'http://localhost:8080/estabelecimento';
   try {
       let res = await fetch(url);
       return await res.json();
   } catch (error) {
       console.log(error);
   }
}

// RENDERIZA OS ESTABELECIMENTOS EM TELA
async function renderEstablishment() {
   let establishment = await getEstablishment();
   let html = '';
   establishment.map(establishment => {
       let htmlSegment = `
         <div class="card-establishment" id="${establishment.id}">
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

   // CRIA O CARROSSEL COM ESTABELECIMENTOS
   $('.card-container').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
   });
}

renderEstablishment()

// REALIZA O FILTRO POR ESTABELECIMENTO
let search = document.getElementById('search');
let feedbackSearch = document.getElementById('feedback-search');
let cardContainer = document.getElementsByClassName('card-container')[0]
search.addEventListener('keyup', e => {
	Array.from(document.getElementsByClassName('card-establishment')).map( item => {
      let establishmentByName = item.children[1].children[0].children[0];
		let hasMatch = establishmentByName.innerText.toLowerCase().includes(search.value);
		item.style.display = hasMatch ? 'unset': 'none'
      feedbackSearch.style.display = hasMatch ? 'none' : 'block'
      cardContainer = hasMatch ? 'none' : 'block'
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


