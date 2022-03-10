<template>
  <div class="log-form">
    <h2>後台管理系統</h2>
    <Form ref="form" class="col-md-6" @submit="login" v-slot="{ errors }">
      <div class="mb-4">
        <Field
          type="text"
          title="帳號"
          placeholder="帳號"
          name="帳號"
          :class="{ 'is-invalid': errors['帳號'] }"
          rules="required"
          v-model="user.username"
        />
        <ErrorMessage name="帳號" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-4">
        <Field
          type="password"
          title="密碼"
          placeholder="密碼"
          name="密碼"
          :class="{ 'is-invalid': errors['密碼'] }"
          rules="required"
          v-model="user.password"
        />
        <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
      </div>
      <button
        type="submit"
        class="btn"
      >
      <!-- 如果button上面是@click="login" 而不到form上面寫@submit為何不行?-->
        登入
      </button>
      <button type="button" class="btn btn-primary">回首頁</button>
    </Form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  // Email 登入
  // 存 cookie
  // 轉址到後台
  methods: {
    login () {
      this.$http
        .post(`${process.env.VUE_APP_API}/v2/admin/signin`, this.user)
        .then((res) => {
          console.log(res.data)
          const { token, expired } = res.data // 回傳的 token, expired 取值
          document.cookie = `karenzToken=${token}; expires=${new Date(
            expired
          )};` // token, expired 存入 cookie
          alert(res.data.message)
          // 轉址到後台
          this.$router.push('/admin/adminProducts')
        })
        .catch((err) => {
          console.log(err)
          alert('登入資料有誤，請重新輸入！')
          this.user.username = ''
          this.user.password = ''
        })
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.log-form {
  width: 40%;
  min-width: 320px;
  max-width: 475px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);

  @media (max-width: 40rem) {
    width: 95%;
    position: relative;
    margin: 2.5% auto 0 auto;
    left: 0%;
    -webkit-transform: translate(0%, 0%);
    -moz-transform: translate(0%, 0%);
    -o-transform: translate(0%, 0%);
    -ms-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
  }

  form {
    display: block;
    width: 100%;
    padding: 2rem;
  }

  h2 {
    width: 100%;
    color: lighten(white, 20%);
    font-size: 1.25em;
    display: block;
    background: #4c1b31;
    width: 100%;
    padding: 0.75em 1.5em;
    box-shadow: inset 0px 1px 1px fadeout(white, 95%);
    border: 1px solid darken(#2a2a2a, 5%);
    margin: 0;
    font-weight: 200;
  }

  input {
    display: block;
    margin: auto auto;
    width: 100%;
    margin-bottom: 2em;
    padding: 0.5em 0;
    border: none;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 1.25em;
    color: #757575;
    &:focus {
      outline: none;
    }
  }

  .btn {
    display: inline-block;
    background: #4c1b31;
    border: 1px solid darken(#4c1b31, 5%);
    padding: 0.5em 2em;
    color: white;
    margin-right: 0.5em;
    box-shadow: inset 0px 1px 0px fadeout(white, 80%);
    &:hover {
      background: lighten(#4c1b31, 5%);
    }
    &:active {
      background: #4c1b31;
      box-shadow: inset 0px 1px 1px fadeout(black, 90%);
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
