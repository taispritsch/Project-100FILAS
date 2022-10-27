let establishmentInsertForm = document.getElementById('establishmentInsertForm');
let establishmentUpdateForm = document.getElementById('establishmentUpdateForm');
let inserirUrl = 'http://localhost:8080/inserirEstabelecimento';
let deleteUrl = 'http://localhost:8080/deletarEstabelecimento/';
let updateUrl = 'http://localhost:8080/atualizarEstabelecimento/'

if(establishmentInsertForm){
    establishmentInsertForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const dataJSON = Object.fromEntries(data.entries());
        dataJSON.descricao = data.get('descricao');
        register(dataJSON);
    })
}

if(establishmentUpdateForm){
    establishmentUpdateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const dataJSON = Object.fromEntries(data.entries());
        dataJSON.descricao = data.get('descricao');
        updateEstablishment(id, dataJSON);
    })
}


function register(body){
    fetch(inserirUrl, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            console.log("Estabelecimento cadastrado com sucesso!")
            return response.json();
        }
        return Promise.reject(response);
    }).catch(function (error) {
        console.warn('Erro ao inserir estabelecimento.', error);
    });
}

function deleteEstablishment(id){
    fetch(deleteUrl+id, {
         method: 'DELETE' 
    }).then(function (response) {
        if (response.ok) {
            console.log("Estabelecimento deletado com sucesso!")
            return response.json();
        }
        return Promise.reject(response);
    }).catch(function (error) {
        console.warn('Erro ao deletar estabelecimento.', error);
    });
}

function updateEstablishment(body, id){
    fetch(updateUrl+id, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            console.log("Estabelecimento atualizado com sucesso!")
            return response.json();
        }
        return Promise.reject(response);
    }).catch(function (error) {
        console.warn('Erro ao atualizar estabelecimento.', error);
    });
}