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
                        <div class"info-item">
                            <h2><span>${itens.nome}</span></h2>
                            <div class="item-value">
                                <p>R$<span>${itens.valor}</span></p>
                            </div>
                        </div>
                        <p class"description"><span>${itens.descricao}</span></p>
                        <button type="button" class="btn">PEDIR</button>
                    </div>
                </div>`;
    
            html += htmlSegment;
        });
    
        let container = document.querySelector('.card-product-container');
        container.innerHTML = html;
    }    
    renderProducts(args.id);
})
