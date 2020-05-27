import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
// import routes from './routes'
import Categorias from './components/Categorias.vue'
import AddEditCategory from './components/AddEditCategory.vue'
import ErrorPage from './components/ErrorPage.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuelidate)

const routes = [
  { path: '/', component: Categorias },
  { path: '/categorias/:id?', component: Categorias },
  { path: '/editcategoria/:id', component: AddEditCategory },
  { path: '/savecategoria/', component: AddEditCategory },
  { path: '*', component: ErrorPage }
  // Se le pone el name  para llamarlo desde el touter link con para
  // //mwtros
  // { path: '/rutasexample/:id?',name:'rutasexample', component: RutasParametros },
]

// Inicializar el routerrrrrrrrrr
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
