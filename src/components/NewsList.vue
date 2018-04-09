<template>
  <div class="news">
    <ul>
    <news v-for="news in newsList" :key="news" :title="news"></news>
    </ul>
  </div>
</template>

<script>
import News from './News'

export default {
  name: 'NewsList',
  components: {
    News
  },
  data() {
    return {
      newsList: ['news1', 'news2', 'news3']
    }
  }
}
</script>

<style scoped>

</style>
