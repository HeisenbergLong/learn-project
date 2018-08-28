<template>
  <div id="app">
    <div class="header">header</div>
    <div class="container">
      <div class="left">left Nav</div>
      <div class="main">
          <router-link :to="{name: 'view1'}" class="btn">to view1</router-link>
          <router-link :to="{name: 'view2'}" class="btn">to view2</router-link>
          <transition name="fade" mode="out-in" @after-enter="transitionComplete">
            <!-- 对加载的数据进行缓存 -->
            <keep-alive>
              <router-view/>
            </keep-alive>
          </transition>
      </div>
    </div>
    <div class="footer">footer</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    transitionComplete(el){
      console.log(el);
    }
  }
}
</script>

<style>
html,body,p,h1,h2,h3{
  margin: 0;
  padding: 0;
}
html,body,#app{
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  position: relative;
  overflow: hidden;
}
#app{
  box-sizing: border-box;
}

.header,.footer,.left,.btn{
  color: #fff;
  text-align: center;
}

.btn{
  display: inline-block;
  margin: 4px 6px;
  width: 110px;
  height: 36px;
  line-height: 36px;
  border-radius: 4px;
  border: 1px solid #999;
  background: #fff;
  color: #000;
  font-size: 14px;
  text-decoration: none;
}
.btn:hover{
  background: #07f;
  color: #fff;
}

.header,.footer{
  height: 80px;
  line-height: 80px;
  background: #000;
}
.footer{
  position: absolute;
  bottom: 0;
  width: 100%;
}

.container{
  position: relative;
  height: 100%;
  background: #eaeaea;
  box-sizing: border-box;
}

.left{
  position: absolute;
  width: 120px;
  height: 100%;
  background: gray;
}

.main{
  width: 100%;
  height: 100%;
  margin-left: 120px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
