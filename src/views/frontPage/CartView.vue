<template>
  <div class="container">

    <h1 class="text-center">購物車</h1>

    <div class="mt-4">
      <table class="table align-middle">
        <!-- 表頭 -->
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>

        <!-- 表單主體 -->
        <tbody>
          <tr v-for="productItem in productData" :key="productItem.id">
            <td style="width: 250px">
              <div
                :style="{ backgroundImage: `url(${productItem.imageUrl})` }"
                style="
                  height: 150px;
                  background-size: cover;
                  background-position: center;
                "
              ></div>
            </td>
            <td>
              {{ productItem.title }}
            </td>
            <td>
              <div
                class="h5"
                v-if="productItem.price === productItem.origin_price"
              >
                優惠價
                <span class="text-danger">{{ productItem.price }}</span> 元
              </div>
              <div v-else>
                <del class="h6 mb-6"
                  >原價 {{ productItem.origin_price }} 元</del
                >
                <div class="h5">
                  優惠價
                  <span class="text-danger">{{ productItem.price }}</span> 元
                </div>
              </div>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="addToCart(productItem.id)"
                :disabled="isLoadingItem === productItem.id"
              >
                <div
                  class="spinner-border spinner-border-sm text-danger"
                  role="status"
                  v-show="isLoadingItem === productItem.id"
                ></div>
                加到購物車
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'
export default {
  data () {
    return {
      cartData: [],
      productData: [],
      isLoadingItem: '',
      qty: 1
    }
  },
  methods: {
    // 取得產品列表
    getProductList () {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          console.log(res.data)
          this.productData = res.data.products
        })
        .catch((err) => {
          console.dir(err)
        })
    },

    // 購物車：加入產品
    // 產品數量：參數預設值 (商品數量為 1)
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty: qty // 也可以解構賦值只寫 qty
      }

      this.isLoadingItem = id

      this.$http
        .post(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`, {
          data
        })
        .then((res) => {
          console.log(res.data, '這裡有資料嗎')
          alert('已成功加入購物車')
          // this.getCartData()
          this.isLoadingItem = ''
          emitter.emit('get-cart-data')
        })
        .catch((err) => {
          console.dir(err)
        })
    }
  },
  mounted () {
    this.getProductList()
  }
}
</script>
