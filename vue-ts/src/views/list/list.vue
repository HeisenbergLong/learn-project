<template lang="pug">
  .list-wrapper
    h1 {{title}}
    p {{content}}
    router-link(to="/") to Home page
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop({
    default() {
      return {}
    }
  })
  info!: Info

  title: string = ''
  content: string = ''

  init() {
    const query = this.$route.query
    this.title = query.title
    this.content = query.content
  }

  created() {
    if (JSON.stringify(this.$route.query) !== '{}') {
      this.init()
    }
  }
}
interface Info {
  title: string
  content: string
}
</script>

<style scoped lang="stylus">
.list-wrapper
  text-align center

  .router-link-active
    margin-top 20px

  h1
    color red
    text-align center
</style>
