/* const {ipcRenderer} = require('electron');
ipcRenderer.on('products', (e, args) => {    
    async function getPedido(id) {
        let url = 'http://localhost:8080/listarPedido';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    // Carrega os pedidos
    async function renderPedidos(param) {
        let pedido = await getPedido(param.id);
        let html = '';
        pedido.pedido.map(pedido => {
            console.log(pedido)
            let htmlSegment = `
                <div class="card-product" id="${pedido.id}">
                    <img class="img-product" src="../../assets/produtos/pastel.png" alt="Pastel de Frango" />
                    <div class="info">                    
                        <h6>${pedido.item_id}</h6>
                        <span>R$ ${pedido.valor}</span>                        
                        <p>${pedido.nome_item}</p>
                        <div class=button-area>
                            <button onclick="decrease(${itens.id})" type="button">-</button>
                            <p id="item${itens.id}">0</p>
                            <button onclick="increase(${itens.id})" type="button">+</button>
                        </div>
                    </div>
                </div>`;
    
            html += htmlSegment;
        });
    
        let container = document.querySelector('.card-product-container');
        container.innerHTML = html;
        getListItem(itens);
    }    
    renderPedidos(args.id);


})
 */