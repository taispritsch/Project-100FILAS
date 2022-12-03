const deleteItemUrl = 'http://localhost:8080/deletarItem/';
async function getProducts(id) {
      let url = 'http://localhost:8080/listarItensPorEstabelecimento/'+id;
      try {
         let res = await fetch(url);
         return await res.json();
      } catch (error) {
         console.log(error);
      }
}

let itens;
// Carrega os produtos do estabelecimento
async function renderProducts() {
      var estabilishmentSessionId = JSON.parse(sessionStorage.getItem('estabelecimento'));
      itens = await getProducts(1);
      let html = '';
      itens.itens.map(itens => {
         let htmlSegment = `
            <div class="card-product list" id="${itens.id}">
               <img class="img-product" src="../../assets/est_${1}/${itens.caminho_imagem}" alt="${itens.descricao}" />
               <div class="info">                    
                  <h6>${itens.nome}</h6>
                  <span>R$ ${itens.valor}</span>                        
                  <p>${itens.descricao}</p>
                  <div class=button-area>
                     <button onClick="deleteItem(${itens.id})" type="button">Excluir</button>
                     <button onClick="editItem(${itens.id})" type="button">Editar</button>
                  </div>
               </div>
            </div>`;

         html += htmlSegment;
      });

      let container = document.querySelector('.card-product-container');
      container.innerHTML = html;
}    
renderProducts();

async function deleteItem(id){
   fetch(deleteItemUrl+id, {
      method: 'DELETE',
      headers: {
          'Content-type': 'application/json'
      }
  }).then(function (response) {
      if (response.ok) {
          console.log("Produto deletado com sucesso!");
          document.getElementsByClassName('card-product-container')[0].innerHTML = '';
          renderProducts();
          return response.json();
      }
  }).catch(function (error) {
      console.error('Erro ao deletar item do estabelecimento.', error);
  });
}

async function editItem(idItem){
   var item
   for(let i = 0; i < itens.itens.length; i++) {
      if(itens.itens[i].id == idItem){
         item = itens.itens[i];
      }
   }
   sessionStorage.setItem('item', JSON.stringify(item));
   window.location.href = '../products/edit-product.html';
}