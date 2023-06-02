import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Login.vue'),
    },

    {
      path: '/cadastroCliente',
      component: () => import('../views/cadastroCliente.vue'),
    },

    {
      path: '/cadastroFuncionario',
      component: () => import('../views/cadastroFuncionario.vue'),
    },
  ],
})