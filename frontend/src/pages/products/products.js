const {ipcRenderer} = require('electron');
ipcRenderer.on('establishment', (e, args) => {    
    async function getProducts(id) {
        let url = 'http://localhost:8080/listarItens';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
     
    // Carrega os produtos do estabelecimento
    async function renderProducts(param) {
        let itens = await getProducts(param.id);
        let html = '';
        itens.itens.map(itens => {
            console.log(itens)
            let htmlSegment = `
                <div class="card-product" id="${itens.id}">
                    <img class="img-product" src="../../assets/produtos/pastel.png" alt="Pastel de Frango" />
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
    renderProducts(args.id);

})
let listItem;
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

