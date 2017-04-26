<template>
  <div class="hello">   
    <div class="content-header">
      <div class="avatar">
        <img :src="seller.avatar" width="80" height="80">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="songda">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if='seller.supports' class="support">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  }
}
</script>

<!-- add "scoped" attribute to limit CSS to this component only -->
<style>
.hello{
  background: rgba(0, 0,0, 0.5);
  color: #fff;
  padding: 20px 20px 16px;
  font-size: 0;
}
.avatar{
  display: inline-block;
}
.content{
  display: inline-block;
  font-size: 14px;
  margin-left: 14px;
}
.avatar img{
  border-radius: 2px;
}
.title{
  margin: 2px 0 8px 0;
}
.brand{
  display: inline-block;
  width: 30px;
  height: 18px;
  background:  url(./) 0 0 no-repeat;
}
</style>
