<template>
    <div class="container my-5">
      <main>
        <RouterView />
      </main>
      <div class="card shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Teste para Empresa</h5>
          <dl class="row">
            <dt class="col-sm-3">Descrição:</dt>
            <dd class="col-sm-9">
              <p>Menus acima estão são SPA e não são recarregados ao click</p>
              <p>É possivel Clicar na imagem e ser redirecionado para o site da.</p>
              <p>Na pagina de CEP é possivel fazer a pesquisa no qual ao encontrar o cep é apresentado os dados na tela.</p>
            </dd>
            <dt class="col-sm-3"></dt>
            <dd class="col-sm-9">
              <p>Pagina de Cep trabalha com BackEnd em Laravel/Lumen.</p>
              <p>Toda requisição volta um cep digitado no formulario da tela e esta guardando o log em uma tabela que pode ser acessada no endpoint do BackEnd "/historico"</p>              
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
  