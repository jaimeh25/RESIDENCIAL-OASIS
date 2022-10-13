
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') },
      { path: 'palapas', component: () => import('pages/palapas.vue') },
      { path: 'mensajes', component: () => import('pages/mensajes.vue') },
      { path: 'reglamento', component: () => import('pages/reglamento.vue') },
      { path: 'avisoprivacidad', component: () => import('pages/avisoprivacidad.vue') },
    ]
  },
  {
    path: '/oasis/',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: 'avisoprivacidad', component: () => import('pages/avisoprivacidad.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
