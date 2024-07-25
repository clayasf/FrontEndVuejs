<template>
    <div class="container my-5">
      <main>
        <RouterView />
      </main>
      <div class="card shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Teste para Empresa TradeUp</h5>
          <p class="card-text">Abaixo temos a imagem conforme pedido no teste.</p>
          <dl class="row">
            <dt class="col-sm-3">Descrição:</dt>
            <dd class="col-sm-9">
              <p>Menus acima estão são SPA e não são recarregados ao click</p>
              <p>Na pagina de CEP é possivel fazer a pesquisa no qual ao encontrar o cep é apresentado os dados na tela.</p>
            </dd>
            <dt class="col-sm-3">
              <a href="https://www.tradeupgroup.com/" target="_blank">
                <img alt="tradeup logo" class="img-fluid" src="../../assets/tradeup-300x93-1.png" />
              </a>
            </dt>
            <dd class="col-sm-9">
              <p>É possivel Clicar na imagem e ser redirecionado para o site da TradeUP.</p>
            </dd>
            <dt class="col-sm-3"></dt>
            <dd class="col-sm-9">
              <p>Nossas soluções transformaram o modelo de venda de serviços no varejo brasileiro.</p>
              
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { RouterView } from 'vue-router';
  
  export default {
    name: 'HomeComponent',
    components: {
      RouterView,
    },
    methods: {
      redirect() {
        window.location.href = 'https://www.tradeupgroup.com/';
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  
  .card {
    margin-top: 20px;
  }
  
  .card-body h5 {
    font-weight: bold;
  }
  
  .card-body p {
    margin-bottom: 10px;
  }
  </style>
  