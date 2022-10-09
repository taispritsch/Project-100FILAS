async function getProducts() {
    let url = 'http://localhost:8080/item';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
 }


// Carrega os produtos do estabelecimento
async function renderProducts() {
    let itens = await getProducts();
    let html = '';
    itens.map(itens => {
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
 
    let container = document.querySelector('.card-container');
    container.innerHTML = html;
 }