var orderNumber = JSON.parse(sessionStorage.getItem('numeroPedido'));
//console.log(orderNumber);

async function getPedido(id) {
    let url = 'http://localhost:8080/listarPedidoPorNumeroPedido/'+id;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

//listar itens por estabelecimento
async function getProducts(id) {
    let url = 'http://localhost:8080/listarItensPorEstabelecimento/'+id;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

let itens;
let pedido;
// Carrega o pedido;
async function renderPedido() {
      pedido = [];
      itens = [];

      pedido = await getPedido(orderNumber);
      
      let nomeItem = '';
      let nomeCliente = '';
      let total = 0;
      let htmlTitle = ``;
      let html = '';
      let htmlSegment = '';

      pedido.pedido.map(async pedido => {

        //imprime o nome do cliente na tela
        nomeCliente = pedido.nome_cliente;
        htmlTitle = `<p class="title">${nomeCliente.toUpperCase()}, SEU PEDIDO FOI EFETUADO COM SUCESSO!</p>`;

        //valor total do pedido
        total += pedido.valor_total;
        
        //pegar o nome do produto. 
        itens = await getProducts(pedido.estabelecimento_id);
        itens.itens.map(itens =>{
            if(pedido.item_id == itens.id){
                nomeItem = itens.nome;
            }
        });

        //grava o pedido no array
        let gravar = [{
            'nome': nomeItem,
            'quantidade': pedido.quantidade_item,
            'valorTotal': pedido.valor_total,
        }]

        
        gravar.forEach(item => {

            htmlSegment = `
                
            <div class="list">
                <div class="info">                   
                    <p class="amount">${item.quantidade}x</p><p class="item">${item.nome}</p>          
                </div>
                <p class="totalItem">R$${item.valorTotal}</p>
            </div>`;

            
           html += htmlSegment;
        });

        //imprime no carrinho
        let container = document.querySelector('.card-pedido-container');
        container.innerHTML = html;
      });

      let htmlValue = `
      
        <p class="total">TOTAL:</p>
        <p class="value-total">R$${total}</p>`;

      let title = document.querySelector('.title');
      let content = document.querySelector('.value');
      title.innerHTML = htmlTitle;
      content.innerHTML = htmlValue;
}    
renderPedido();


/* pagamento */

/* window.setTimeout('backToHome()', 50000);

function backToHome(){
    window.location.href = '../homepage/homepage.html';
} */