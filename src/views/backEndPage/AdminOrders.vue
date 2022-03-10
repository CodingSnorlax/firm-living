<template>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="order in tempOrderData" :key="order.id">
          <!-- {{order}} -->
          <tr v-if="tempOrderData.length">
            <td>{{ order.create_at }}</td>
            <td>
              <span> {{ order.user.email }} </span>
            </td>
            <td>
              <ul class="px-0">
                <li
                  class="list-unstyled"
                  v-for="(item, index) in order.products"
                  :key="index"
                >
                  {{ item.product.title }} / 數量：{{ item.qty }}
                  {{ item.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ order.total }}</td>
            <td>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label">
                  <span v-if="order.is_paid === true">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm" type="button">
                  檢視
                </button>
                <button class="btn btn-outline-danger btn-sm" type="button">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <!-- 產品分頁元件 -->
    <dashboard-pagination
      :pages="pagination"
      @get-product="getOrderData"
    ></dashboard-pagination>
  </div>
</template>

<script>
// 為什麼 modal 要到 'bootstrap/js/dist/modal' 載入使用，可是像 pagination 這種就不用? 是因為 modal 有用到 js 嗎？
import DashboardPagination from '../../components/DashboardPagination.vue'

export default {
  data () {
    return {
      tempOrderData: [],
      pagination: {}
    }
  },
  components: {
    DashboardPagination
  },
  methods: {
    getOrderData (currentPage = 1) {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/orders/?page=${currentPage}`
        )
        .then((res) => {
          console.log(res.data.orders)
          this.tempOrderData = res.data.orders
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          console.log(err.data)
        })
    }
  },
  mounted () {
    this.getOrderData()
  }
}
</script>
