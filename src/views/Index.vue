<template>
  <div class="container">
    <h1>首頁</h1>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {},
  mounted () {
    console.log(this.$http.get)
  }
}
</script>
