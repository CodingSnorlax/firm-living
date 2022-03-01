<template>
  <!-- nav bar 起始 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" aria-current="page" to="/admin"
        >後台</router-link
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
            <router-link class="nav-link" to="/admin/adminProducts"
              >後台產品</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/adminCoupons"
              >優惠券</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">前台</router-link>
          </li>
          <li>
            <button
              class="btn btn-outline-light"
              type="submit"
              @click="signout"
            >
              登出
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- nav bar 結束 -->
</template>

<script>
export default {
  signout () {
    console.log(`${process.env.VUE_APP_API}/v2/logout`)
    this.$http
      .post(`${process.env.VUE_APP_API}/v2/logout`)
      .then((res) => {
        console.log(res)
        console.log('test1')
      })
      .catch((err) => {
        console.log(err)
        console.log('test2')
      })
  }
}
</script>
