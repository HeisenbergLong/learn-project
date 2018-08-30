<template lang="pug">
  .home
    h1 home
    Articles
</template>


<script>
import Articles from '@/components/articles/articles'

export default {
  components: {
    Articles
  },
  data() {
    return {}
  },
  methods: {},
  created() {}
}
</script>

<style lang="stylus" scoped>
.home
  margin 0 auto
  width 600px

  h1
    color red
    font-size 50px
    text-align center
</style>
