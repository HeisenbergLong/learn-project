<template>
  <div class="redView2">
    <ul>
      <li>
        <h1>香蕉</h1>
        <a class="btn" @click="add('banana')">+</a>
        <p>{{bananaTotalPrice}}元|{{bananaNum}}个</p>
        <a class="btn" @click="minus('banana')">-</a>
      </li>
      <li>
        <h1>苹果</h1>
        <a class="btn" @click="add('apple')">+</a>
        <p>{{appleTotalPrice}}元|{{appleNum}}个</p>
        <a class="btn" @click="minus('apple')">-</a>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'redView2',
  data () {
    return {
      //单品总数量
      bananaNum: 0,
      appleNum: 0,
      //单价
      bananaPrice: 5,
      aplePrice: 10
    }
  },
  methods: {
    add (type) {
      if(type === 'banana'){
        this.bananaNum += 1;
      }else{
        this.appleNum += 1;
      }
    },
    minus (type){
      if( type === 'banana' && this.bananaNum > 0){
        this.bananaNum -= 1;
      }else if(this.appleNum > 0){
        this.appleNum -= 1;
      }
    },
    trigger (){
      this.$store.dispatch('actionPrice',this.bananaNum*this.bananaPrice + this.appleNum*this.aplePrice);
    }
  },
  computed: {
    //单品总价格
    bananaTotalPrice: function(){
      this.trigger();
      return this.bananaNum*this.bananaPrice;
    },
    appleTotalPrice: function(){
      this.trigger();
      return this.appleNum*this.aplePrice;
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
