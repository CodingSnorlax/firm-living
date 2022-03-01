<template>
  <div class="container">
    <div class="row pt-16">
      <div class="col-6">
        <img class="productImg" :src="product.imageUrl" :alt="product.title">
      </div>
      <div class="col-6">
        <h3 class="d-flex justify-content-between mb-2">{{ product.title }}</h3>
        <p class="fw-light text-secondary">{{ product.description }}</p>
          <div class="h5" v-if="product.price === product.origin_price">{{ product.price }} 元</div>
            <div v-else class="mb-4">
              <del class="h6 fw-light"> $ {{ product.origin_price }}</del>
              <div class="h4 text-secondary"> $ {{ product.price }}</div>
            </div>
            <!-- 購物車數量 -->
            <div class="input-group mb-4 w-50 me-4">
              <input type="number" class="form-control" min="1" v-model="qty">
              <button type="button" class="btn btn-dark" @click="addToCart">加入購物車</button>
            </div>
            <!-- 文案 -->
            <div class="mb-4">
              <h6>包裝內容</h6>
              <p class="fw-light">{{ product.content }}</p>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: []
    }
  },
  methods: {
    getSingleProduct () {
      const { id } = this.$route.params
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/product/${id}`
        )
        .then((res) => {
          console.log(res.data)
          this.product = res.data.product
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getSingleProduct()
  }
}
</script>

<style lang="scss" scoped>

</style>
