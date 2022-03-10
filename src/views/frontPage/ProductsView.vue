<template>
  <div class="container">
    <h2 class="mb-4 pt-16">熱門商品</h2>
    <div class="row row-cols-1 row-cols-md-2 g-5">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card border-0 h-100">
          <img :src="product.imageUrl" class="card-img-top productImg" alt="" />
          <div class="card-body d-flex justify-content-between">
            <div class="">
              <h5 class="card-title">{{ product.title }}</h5>
              <div v-if="product.origin_price === product.price">
                <p class="card-text me-4">$ {{ product.origin_price }}</p>
              </div>
              <div class="d-flex align-items-center">
                <del class="card-text me-4 text-muted">$ {{ product.origin_price }}</del>
                <p class="card-text text-danger">$ {{ product.price }}</p>
              </div>
            </div>
            <div>
              <router-link class="stretched-link" :to="`/products/${product.id}`"></router-link>
              <a href="#" class="btn btn-dark">＋</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  mounted () {
    this.$http
      .get(
        `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products/all`
      )
      .then((res) => {
        console.log(res.data)
        this.products = res.data.products
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
.productImg {
  object-fit: cover;
  width: 100%;
  height: 450px;
  max-width: 100%;
  }
</style>
