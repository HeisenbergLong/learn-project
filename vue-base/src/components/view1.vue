<template>
  <div class="view1">
    <router-link to="view1/red" class="btn">to redView1</router-link>
    <h1>{{ msg }}</h1>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'view1',
  data () {
    return {
      msg: 'This is view1.vue file'
    }
  },
  methods: {
    init(){
      this.getParam();
    },
    getParam(){
      console.log( this.$route.params );
    }
  },
  created(){
    this.init();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
