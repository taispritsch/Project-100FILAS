var orderNumber = JSON.parse(sessionStorage.getItem('numeroPedido'));
console.log(orderNumber);

// USAR ESSA VARIAVEL ORDERNUMBER PARA:
/*
1 - CHAMAR A ROTA DE PEDIDOS POR NUMÉRO_PEDIDO;
OBS: A GABI AINDA IRÁ CRIAR ESSA ROTA.

2 - RENDERIZAR OS ITENS ATRAVÉS DE UM MAP;
*/

async function getPedido(id) {
    let url = 'http://localhost:8080/listarPedidoPorNumeroPedido/'+id;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

/* async function getItem(id) {
    let url = 'http://localhost:8080/listarPedido_has_item/'+id;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.error(error);
    }
} */


let pedido;
// Carrega o pedido;
async function renderPedido() {
      pedido = [];
    
      pedido = await getPedido(orderNumber);;
      
      let nomeCliente = '';
      let total = 0;
      let htmlTitle = ``;
      let html = '';
      pedido.pedido.map(pedido => {

        nomeCliente = pedido.nome_cliente;
        htmlTitle = `<p class="title">${nomeCliente.toUpperCase()}, SEU PEDIDO FOI EFETUADO COM SUCESSO!</p>`;
        
        total += pedido.valor_total;
         let htmlSegment = `
                
                <div class="info">                    
                    <p class="amount">${pedido.quantidade_item}x</p>
                    <p class="total">R$${pedido.valor_total}</p>                
                </div>`;

         html += htmlSegment;
      });

      let htmlValue = `
      
        <p class="total">TOTAL:</p>
        <p class="value-total">R$${total}</p>`;


      let title = document.querySelector('.title');
      let container = document.querySelector('.card-pedido-container');
      let content = document.querySelector('.value');
      title.innerHTML = htmlTitle;
      container.innerHTML = html;
      content.innerHTML = htmlValue;
}    
renderPedido();


/* pagamento */

/* window.setTimeout('backToHome()', 50000);

function backToHome(){
    window.location.href = '../homepage/homepage.html';
} */