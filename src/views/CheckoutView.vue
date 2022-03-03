<template>
  <div class="container">
    <div class="row pt-16 flex-row-reverse">
      <div class="col-md-6 mb-4">
        <h2>商品明細</h2>
        <table class="table align-middle">
          <thead>
            <tr>
              <th>運費</th>
              <th></th>
              <th></th>
              <th>$ 0</th>
            </tr>
            <tr class="border-0">
              <th>折價券</th>
              <th></th>
              <th></th>
              <th>$ 0</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>折價券</th>
              <th></th>
              <th></th>
              <th>$ 0</th>
            </tr>
          </tbody>
        </table>
      </div>
     <!-- 驗證表單的區塊 -->
      <div class="col-md-6">
        <h2>收件資訊</h2>
        <Form ref="form" class="col-md-6" v-slot="{ errors }">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <Field
              id="email"
              name="信箱"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['信箱'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <Field
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              :rules="isPhone"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              id="message"
              class="form-control"
              v-model="form.message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div class="text-end">
            <button
              type="button"
              class="btn btn-danger"
              @click="sendOrder"
              :disabled="
                cartData.carts?.length === 0 || Object.keys(errors).length > 0
              "
            >
              送出訂單
            </button>
          </div>
        </Form>
        <!-- 表單驗證區 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cartData: [],
      form: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    sendOrder () {
      console.log('test')
    },
    // 套件：電話號碼規則
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請輸入有效的電話號碼'
    }
  }
}
</script>
