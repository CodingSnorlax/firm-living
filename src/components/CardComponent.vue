<template>
    <div class="card" style="width: 18rem;">
    <img src="https://m.media-amazon.com/images/M/MV5BMGI5ZTZiMGYtMmI3NC00ODc1LTllYzYtMWRjN2IzNTAwOWUyXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg" class="card-img-top" alt="">
    <div class="card-body">
        <h3 class="card-title">{{ cardTitle }}</h3>
        <h5>{{ cardSubtitle }}</h5>
        <p class="card-text">{{ cardText }}</p>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      cardTitle: '恰吉',
      cardSubtitle: '固家居店長',
      cardText: '你好我是恰吉，我有在做代客燒烤。'
    }
  }
}
</script>

<style lang="scss" scoped>
.chucky {
  width: 800px;
}

.card {
  font-size: 20px;
}
</style>
