import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 前台
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '', // 首頁沒有自己的路由，是顯示 frontView 的內容 (繼承父層)
        component: () => import('../views/Index.vue')
      },
      {
        path: 'about',
        component: () => import('../views/About.vue')
      },
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: '/products/:id', // 單一產品：動態參數
        component: () => import('../views/SingleProduct.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/CartView.vue')
      },
      {
        path: 'checkout',
        component: () => import('../views/CheckoutView.vue')
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
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: '/admin/adminProducts',
        component: () => import('../views/AdminProducts.vue')
      },
      {
        path: '/admin/adminOrders',
        component: () => import('../views/AdminOrders.vue')
      },
      {
        path: '/admin/adminCoupons',
        component: () => import('../views/AdminCoupons.vue')
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
