<template lang="pug">
  .about-wrapper
    h1 About
    router-link(to="/") to Home page
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped lang="stylus">
.about-wrapper
  text-align center

  .router-link-active
    margin-top 20px

  h1
    text-align center
    color blue
</style>
