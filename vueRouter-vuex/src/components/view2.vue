<template>
  <div class="view2">
    <redView2/>
    <div class="shopping">
      <h3>购物车：</h3>
      <p>总价：{{ totalPrice }}元</p>
    </div>
  </div>
</template>

<script>
import redView2 from './redView2'

export default {
  name: 'view1',
  data () {
    return {
    }
  },
  components: {
    redView2
  },
  methods: {

  },
  computed: {
    totalPrice () {
      return this.$store.state.totalPrice;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view2{
  position: relative;
  height: 60%;
}
.shopping{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 0 20px;
  width: 50%;
  height: 80px;
  background: pink;
}
ul{
  display: flex;
  flex-wrap: wrap;
}
ul li{
  text-align: center;
  margin: 0 15px;
}
</style>
<style>
li{
  list-style: none;
}
</style>
