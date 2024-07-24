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
              <p>Definition for the term.</p>
              <p>And some more placeholder definition text.</p>
            </dd>
            <dt class="col-sm-3">
              <a href="https://www.tradeupgroup.com/" target="_blank">
                <img alt="tradeup logo" class="img-fluid" src="../../assets/tradeup-300x93-1.png" />
              </a>
            </dt>
            <dd class="col-sm-9">
              <p>3333</p>
            </dd>
            <dt class="col-sm-3">Nossas soluções</dt>
            <dd class="col-sm-9">
              <p>Nossas soluções transformaram o modelo de venda de serviços no varejo brasileiro.</p>
              <p>Acima temos a imagem conforme pedido no teste preferi usar o próprio logo e com esse input float readonly para demonstração de texto de tela inicial.</p>
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
  