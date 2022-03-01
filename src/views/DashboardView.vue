<template>
  <DashboardNavbar></DashboardNavbar>
  <router-view />
</template>

<script>
import DashboardNavbar from '../components/DashboardNavbar.vue'

export default {
  components: {
    DashboardNavbar
  },
  methods: {
    checkAdmin () {
      const saveToken = document.cookie.replace(
        // eslint-disable-next-line
        /(?:(?:^|.*;\s*)karenzToken\s*\=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      this.$http.defaults.headers.common.Authorization = saveToken
      this.$http
        .post(`${process.env.VUE_APP_API}/v2/api/user/check`)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.checkAdmin()
  }
}
</script>
