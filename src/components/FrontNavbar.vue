<template>
  <!-- nav bar 起始 -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light pt-3">
    <div class="container-fluid">
      <router-link class="navbar-brand" aria-current="page" to="/"
        >LOGO</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/products">熱門商品</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item me-2">
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li>
          <li class="nav-item me-2">
            <router-link type="button" class="btn btn-dark text-light me-2" to="/login">登入</router-link>
          </li>
          <li>
            <button
              type="button"
              class="btn btn-primary position-relative me-2"
            >
              結帳
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                {{ cartData?.carts?.length }}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- nav bar 結束 -->
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      cartData: []
    }
  },
  methods: {
    getCartData () {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
        )
        .then((res) => {
          console.log(res.data.data)
          // 是個陣列
          this.cartData = res.data.data
        })
        .catch((err) => {
          console.dir(err)
        })
    }
  },
  mounted () {
    this.getCartData()

    // 綁定購物車與 navbar 上的品項新增數量
    emitter.on('get-cart-data', () => {
      this.getCartData()
    })
  }
}
</script>
