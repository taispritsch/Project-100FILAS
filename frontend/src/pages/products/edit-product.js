var itemSession = JSON.parse(sessionStorage.getItem('item'));

document.getElementById('nome').value = itemSession.nome;
document.getElementById('valor').value = itemSession.valor;
document.getElementById('quantidade').value = itemSession.quantidade;
document.getElementById('descricao').value = itemSession.descricao;
document.getElementById(`${itemSession.tipo_item.toLowerCase()}`).checked = true;

let establishmentEditForm = document.getElementById('establishmentEditForm');
let editProductUrl = 'http://localhost:8080/atualizarItem/';

establishmentEditForm.addEventListener('submit', (e) => {
   e.preventDefault();
   var estabilishmentSession = JSON.parse(sessionStorage.getItem('estabelecimento'));
   const data = new FormData(e.target);
   data.append('estabelecimento_id', estabilishmentSession);
   data.append('id', itemSession.id)
   var dataJSON = Object.fromEntries(data.entries())
   if(dataJSON.caminho_imagem.name == ''){
      dataJSON.caminho_imagem = itemSession.caminho_imagem;
   }else {
      dataJSON.caminho_imagem = data.get('caminho_imagem').name;
   }
   dataJSON.descricao = data.get('descricao');;
   register(dataJSON);
})

function register(body){
   fetch(editProductUrl+body.id, {
       method: 'PUT',
       body: JSON.stringify(body),
       headers: {
            'Content-type': 'application/json; charset=UTF-8',
       }
   }).then(function (response) {
       if (response.ok) {
           console.log("Produto alterado com sucesso!")
           alert("Produto alterado com sucesso!");
           window.location.href = '../estabilishment/products-list.html'
           return response.json();
       }
       return Promise.reject(response);
   }).catch(function (error) {
       console.warn('Erro ao alterar produto do estabelecimento.', error);
   });
}