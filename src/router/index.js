import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 前台
  {
    path: '/',
    component: () => import('../views/frontPage/FrontView.vue'),
    children: [
      {
        path: '', // 首頁沒有自己的路由，是顯示 frontView 的內容 (繼承父層)
        component: () => import('../views/frontPage/Index.vue')
      },
      {
        path: 'about',
        component: () => import('../views/frontPage/About.vue')
      },
      {
        path: 'products',
        component: () => import('../views/frontPage/ProductsView.vue')
      },
      {
        path: '/products/:id', // 單一產品：動態參數
        component: () => import('../views/frontPage/SingleProduct.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/frontPage/CartView.vue')
      },
      {
        path: 'checkout',
        component: () => import('../views/frontPage/CheckoutView.vue')
      }
    ]
  },
  // 登入頁面
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  // 後台
  {
    path: '/admin',
    component: () => import('../views/backEndPage/DashboardView.vue'),
    children: [
      {
        path: '/admin/adminProducts',
        component: () => import('../views/backEndPage/AdminProducts.vue')
      },
      {
        path: '/admin/adminOrders',
        component: () => import('../views/backEndPage/AdminOrders.vue')
      },
      {
        path: '/admin/adminCoupons',
        component: () => import('../views/backEndPage/AdminCoupons.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
