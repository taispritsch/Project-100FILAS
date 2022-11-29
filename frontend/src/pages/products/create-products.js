let establishmentInsertForm = document.getElementById('establishmentInsertForm');
let createProductURL = 'http://localhost:8080/inserirItem';

establishmentInsertForm.addEventListener('submit', (e) => {
   e.preventDefault();
   const data = new FormData(e.target);
   // PEGAR ID NA SESSION E PASSAR PARA O CAMPO ABAIXO
   data.append('estabelecimento_id', '2');
   const dataJSON = Object.fromEntries(data.entries());
   dataJSON.descricao = data.get('descricao');
   dataJSON.caminho_imagem = data.get('caminho_imagem').name
   register(dataJSON);
})

function register(body){
   fetch(createProductURL, {
       method: 'POST',
       body: JSON.stringify(body),
       headers: {
           'Content-type': 'application/json'
       }
   }).then(function (response) {
       if (response.ok) {
           console.log("Produto cadastrado com sucesso!")
           return response.json();
       }
       return Promise.reject(response);
   }).catch(function (error) {
       console.warn('Erro ao inserir produto no estabelecimento.', error);
   });
}