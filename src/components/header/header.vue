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
          <span class="icon" :class="classMap[seller.supports[1].type]"></span>
          <span class="text">{{seller.supports[1].description}}</span>
        </div>
      </div>
      <div class="length" v-if="seller.supports" @click="buttonShow">{{seller.supports.length}}个</div>
    </div>
    <div class="gonggao" @click="buttonShow">
      <span class="icon-g"></span>
      <span class="text">{{seller.bulletin}}</span>
    </div>
  <div class="background">
    <img :src="seller.avatar">
  </div>
  <transition name="fade"><!-- 弹出层动画 -->
  <div class="detail" v-show="detailShow" @click='close' transition='fade'>
    <div class="detail-wrapper">
      <div class="detail-main">
        <h3 class="detail-h3">{{seller.name}}</h3>
        <div class="star">
          <star :size='48' :score='seller.score'></star>
        </div>
        <div class="tt-title">
          <div class="line"></div>
          <div class="tt-text">我的公告</div>
          <div class="line"></div>
        </div>
        <span style="color:#fff;font-size:14px;line-height:28px;">{{seller.bulletin}}</span>
      </div>
    </div>
    <div class="detail-close" >x</div>
  
  </div>
  </transition>
  </div>

   
</template>

<script>
import star from '../star/star.vue'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  created() {
    this.classMap = ['decrease','discount','guarantee','invoice','special']
  },
  data() {
    return {
      detailShow:false
    }
  },
  methods: {
    buttonShow() {
      this.detailShow = true
    },
    close() {
      this.detailShow = false
    }
  },
 components:{
    star
  }

}
</script>


<style >
@import './header.css'
</style>
