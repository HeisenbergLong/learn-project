<template>
  <div class="redView1">
    <h1>{{ msg }}</h1>
  </div>
</template>
 
<script>
export default {
  name: 'redView1',
  data () {
    return {
      msg: 'This is redView1.vue file'
    }
  },
  methods: {
    init(){
      // this.getParam();
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
