<template>
  <div class="news">
    <span v-for="news in newsList" :key="news">{{ news }}</span>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  data() {
    return {
      newsList: ['news1', 'news2', 'news3']
    }
  }
}
</script>

<style scoped>

</style>
