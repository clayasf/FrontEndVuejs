<template>
    <div class="content">
      <div>
        <img alt="correios logo" class="img-fluid" src="../../assets/correios.svg" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <form class="row g-3 needs-validation" novalidate>
              <div class="col-md-12">
                <label for="cepInput" class="form-label">CEP</label>
                <input type="text" class="form-control" id="cepInput" v-model="cep" @input="formatarCep" required>
                <div class="invalid-feedback">
                  CEP inválido.
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="button" @click.prevent="consultar">Pesquisar Cep</button>
              </div>
            </form>
          </div>
        </div>
  
        <div v-if="mostrarFormulario" class="mt-4">
          <h5>Detalhes do Endereço</h5>
          <form class="row g-3">
            <div class="col-md-6">
              <label for="logradouro" class="form-label">Logradouro</label>
              <input type="text" class="form-control" id="logradouro" v-model="endereco.logradouro" readonly>
            </div>
            <div class="col-md-6">
              <label for="complemento" class="form-label">Complemento</label>
              <input type="text" class="form-control" id="complemento" v-model="endereco.complemento" readonly>
            </div>
            <div class="col-md-6">
              <label for="bairro" class="form-label">Bairro</label>
              <input type="text" class="form-control" id="bairro" v-model="endereco.bairro" readonly>
            </div>
            <div class="col-md-6">
              <label for="localidade" class="form-label">Localidade</label>
              <input type="text" class="form-control" id="localidade" v-model="endereco.localidade" readonly>
            </div>
            <div class="col-md-6">
              <label for="uf" class="form-label">UF</label>
              <input type="text" class="form-control" id="uf" v-model="endereco.uf" readonly>
            </div>
            <div class="col-md-6">
              <label for="unidade" class="form-label">Unidade</label>
              <input type="text" class="form-control" id="unidade" v-model="endereco.unidade" readonly>
            </div>
            <div class="col-md-6">
              <label for="ibge" class="form-label">IBGE</label>
              <input type="text" class="form-control" id="ibge" v-model="endereco.ibge" readonly>
            </div>
            <div class="col-md-6">
              <label for="gia" class="form-label">GIA</label>
              <input type="text" class="form-control" id="gia" v-model="endereco.gia" readonly>
            </div>
            <div class="col-md-6">
              <label for="ddd" class="form-label">DDD</label>
              <input type="text" class="form-control" id="ddd" v-model="endereco.ddd" readonly>
            </div>
            <div class="col-md-6">
              <label for="siafi" class="form-label">SIAFI</label>
              <input type="text" class="form-control" id="siafi" v-model="endereco.siafi" readonly>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CepComponent',
    data() {
      return {
        cep: '',
        mostrarFormulario: false,
        endereco: {
          logradouro: '',
          complemento: '',
          bairro: '',
          localidade: '',
          uf: '',
          unidade: '',
          ibge: '',
          gia: '',
          ddd: '',
          siafi: ''
        }
      };
    },
    methods: {
      formatarCep() {
        
        let cep = this.cep.replace(/\D/g, '');

        cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
        this.cep = cep;
      },
      async consultar() {
        
        const cep = this.cep.replace(/\D/g, ''); 
            try {
                if (cep) {
                let response =  await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

                if (!response.data.erro) {
                    this.endereco = response.data;
                    this.mostrarFormulario = true;
                } else {
                    // const bsAlert = new bootstrap.Alert('CEP não encontrado!')
                    alert('CEP não encontrado!');
                    this.mostrarFormulario = false;
                }
                } else {
                    alert('Por favor, insira um CEP válido.');
                    this.mostrarFormulario = false;
                }
                
            } catch (error) {
                alert('CEP com formato Invalido');
                console.log('algo deu errado')
                this.mostrarFormulario = true;
                
            }
            
      }
    }
  };
  </script>
  
  <style scoped>
  .content {
    max-width: 800px;
    margin: 14px auto;
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
  