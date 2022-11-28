async function getOrders(id) {
   let url = 'http://localhost:8080/listarPedidosPorEstabelecimento/'+id;
   // let url = 'http://localhost:8080/listarPedido/'+id;
   try {
       let res = await fetch(url);
       return await res.json();
   } catch (error) {
       console.log(error);
   }
}

// Carrega os pedidos do estabelecimento
async function renderOrderList() {
   let orders = await getOrders(1);
   let html = '';
   orders.pedidos.map(orders => {
      let htmlSegment = `<div class="accordion">
         <img src="../../assets/arrow.svg" class="arrow" alt="arrow" />
         <span>Pedido</span>
         <span>Nº ${orders.id}</span>
         </div>
         <div class="panel">
            <p>${orders.quantidade_item}x Cachorro-Quente <span></span></p>
            <span class="obs">Observação: ${orders.observacao}</span>
            <div>
               <span>Valor Total: R$ ${orders.valor_total}</span>
            </div>
            <div>
               <button type="submit" class="save btn">Cancelar</button>
               <button type="submit" class="save btn">Finalizar</button>
            </div>
         </div>`;
      html += htmlSegment;
   });
   
   let container = document.querySelector('.accordion-area');
   container.innerHTML = html;

   // Lógica ACCORDION
   var acc = document.getElementsByClassName("accordion");
   var i;

   for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
         this.classList.toggle("active");
         var panel = this.nextElementSibling;
         if (panel.style.display === "block") {
            panel.style.display = "none";
         } else {
            panel.style.display = "block";
         }
      });
   }
}
renderOrderList();