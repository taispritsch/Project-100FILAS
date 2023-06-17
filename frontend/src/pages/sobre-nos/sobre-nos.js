const sobre = document.querySelectorAll('.content');

function easterEgg(e){
    sobre.forEach((nos)=>{
        nos.classList.add("animate__hinge");
    })

    setTimeout(aparecer, 3000);
}

function aparecer() {
    const botao = document.querySelector(".return");
    botao.style.display = "none";
    
    const botaoPisca = document.querySelector(".button-egg");
    botaoPisca.style.display = "none";

    const btnReturn = document.querySelector(".button-return");
    btnReturn.style.display = "block";
}

function voltar(){
    window.location.href = '../homepage/homepage.html';
}
  