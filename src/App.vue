<template>
  <div>
    <hello :seller='seller'></hello>
    <div class="tab">
      <div class="tab-itme">
        <router-link v-bind:to="'/goods'">商家</router-link>
      </div>
      <div class="tab-itme">
        <router-link to="/bar">商品</router-link>
      </div>
      <div class="tab-itme">
        <router-link to="/seller">评论</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import hello from './components/header/header.vue'

const ERR_OK = 0//这里定义为0是因为在build/dev-server.js里面数据的导入定义的erron=0

export default {
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this.$http.get('./api/seller').then((response) => {//https://github.com/pagekit/vue-resource这里vue-resource的用法
      response = response.body;//这里可以传的response或者request等等，至于body也是这两个属性里面的属性值
      if(response.erron === ERR_OK){//这里是判断erron===0的时候是成功的获取到数据
        this.seller = response.data
      }
    })
  },
  components: {hello}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom:1px solid #ccc;

}
.tab .tab-itme{
  flex: 1;
  text-align: center;
}
.tab .tab-itme .active{
  color: #f00
}
</style>
