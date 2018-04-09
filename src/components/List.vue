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
  name: 'List',

  components: {
    News
  },

  props: {
    type: String
  },

  data() {
    return {
      newsList: ['news1', 'news2', 'news3']
    }
  },

  mounted() {
    this.$store.dispatch('FETCH_LIST_DATA', { type: this.type })
  }
}
</script>

<style scoped>

</style>
