let establishmentForm = document.getElementById('establishmentForm');
let url = 'http://localhost:8080/inserirEstabelecimento';


establishmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const dataJSON = Object.fromEntries(data.entries());
    dataJSON.descricao = data.get('descricao');
    register(dataJSON);
})

function register(body){
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            console.log("DEU BOM POHA")
            return response.json();
        }
        return Promise.reject(response);
    }).catch(function (error) {
        console.warn('DEU RUIM CARAI.', error);
    });
}

  