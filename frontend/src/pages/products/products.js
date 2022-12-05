const {ipcRenderer} = require('electron');
var clientSession = JSON.parse(sessionStorage.getItem('cliente'));
let listItem;
let numberOfOrders;

ipcRenderer.on('establishment', (e, args) => {
    async function getProducts(id) {
        let url = 'http://localhost:8080/listarItensPorEstabelecimento/'+id;
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.error(error);
        }
    }

    async function getOrders(){
        let url = 'http://localhost:8080/listarPedidos/';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.error(error);
        }
    }
     
    // Carrega os produtos do estabelecimento
    async function renderProducts(param) {
        if(param){
            let itens = await getProducts(param.id);
            let html = '';
            itens.itens.map(itens => {
                let htmlSegment = `
                    <div class="card-product" id="${itens.id}">
                        <img class="img-product" src="../../assets/est_${param}/${itens.caminho_imagem}" alt="${itens.descricao}" />
                        <div class="info">                    
                            <h6>${itens.nome}</h6>
                            <span>R$ ${itens.valor}</span>                        
                            <p>${itens.descricao}</p>
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
        numberOfOrders = await getOrders();
    }    
    renderProducts(args);
})

function decrease(id){
    let count = document.getElementById('item'+id);
    if(+count.textContent > 0){
        count.innerHTML = +count.textContent-1;
        let item = listItem.itens.find(item => item.id === id)
        fillShopCart(item, +count.textContent);
    } 
}

function increase(id){
    let count = document.getElementById('item'+id);
    count.innerHTML = +count.textContent+1;
    let item = listItem.itens.find(item => item.id === id)
    fillShopCart(item, +count.textContent);
}

let list = [];
function fillShopCart(item, amount){
    if(amount === 0){
        list = list.filter(function (a) {
            return a.id !== item.id
        });
    } else {
        list.push(item);

        list = list.filter(function (a) {
            return !this[JSON.stringify(a.id)] && (this[JSON.stringify(a.id)] = true);
        }, Object.create(null))
        list.find(e => {
            e.id == item.id ? e.quantidade = amount : '';
        })
    } 
    updateFloatList(list.length);
}

function updateFloatList(num){
    document.getElementsByClassName('float-list-cart')[0].innerHTML = num;
}

function getListItem(list){
    listItem = list;
}

let confirmOrderBtn = document.getElementById('orderConfirm');
confirmOrderBtn.addEventListener('click', () => {

    if(list.length > 0) {
        for(let i=0; i < list.length; i++) {
            let orders = {
                observacao: list[i].descricao,
                quantidade_item: list[i].quantidade,
                valor_total: list[i].quantidade*list[i].valor,
                item_id: list[i].id,
                nome_cliente: clientSession.nome,
                numero_pedido: numberOfOrders.pedidos.length+1,
                estabelecimento_id: listItem.itens[i].estabelecimento_id
            }
            postOrder(orders);
        }
    }
})

async function postOrder(orders){
    let insertOrderUrl = 'http://localhost:8080/inserirPedido';
    fetch(insertOrderUrl, {
        method: 'POST',
        body: JSON.stringify(orders),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            console.log("Estabelecimento cadastrado com sucesso!")
            sessionStorage.setItem('numeroPedido', orders.numero_pedido);
            window.location.href = '../carrinho/carrinho.html';
            return response.json();
        }
        return Promise.reject(response);
    }).catch(function (error) {
        console.warn('Erro ao inserir estabelecimento.', error);
    });
}