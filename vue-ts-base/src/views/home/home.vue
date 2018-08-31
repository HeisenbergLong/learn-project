<template lang="pug">
  .home-wrapper
    h1 Home.js
    router-link(to="/about") to About page
    a(@click="toList") to List
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  toList() {
    const item: any = {
      path: '/list',
      query: {
        title: 123,
        content: 'content....'
      }
    }
    this.$router.push(item)
  }
}
</script>

<style scoped lang="stylus">
.home-wrapper
  text-align center

  .router-link-active
    margin-top 20px

  h1
    color red
    text-align center
</style>
