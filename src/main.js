import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeComponent from './page/Home/HomeComponent.vue';
import CepComponent from './page/Cep/CepComponent.vue';
import 'bootstrap/dist/css/bootstrap.min.css'

const routes = [
    { path: '/', name:'home', component:HomeComponent },
    { path: '/cep', name:'cep',  component: CepComponent },
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes
  })

createApp(App).use(router).mount('#app')
