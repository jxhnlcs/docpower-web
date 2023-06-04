import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Login.vue'),
    },

    {
      path: '/home',
      component: () => import('../views/Home.vue'),
      meta: { requiresAuth: true }
    },

    {
      path: '/cadastroCliente',
      component: () => import('../views/cadastroCliente.vue'),
      meta: { requiresAuth: true }
    },

    {
      path: '/cadastroFuncionario',
      component: () => import('../views/cadastroFuncionario.vue'),
      meta: { requiresAuth: true }
    },

    {
      path: '/cadastroDocumento',
      component: () => import('../views/cadastroDocumento.vue'),
      meta: { requiresAuth: true }
    },
  ],
})