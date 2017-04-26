<template>
    <div :class="starType">
      <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item" ></span>
    </div>
</template>

<script>
  const LENGTH = 5
  const CLS_ON = 'on'
  const CLS_OFF = "off"
  const CLS_HALF = 'half'
 export default {
    props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      return 'star-' + this.size
    },
    itemClasses() {
      let re = []
      let score = Math.floor(this.score * 2)/2
      let has = score % 1 !== 0
      let int = Math.floor(score)
      for(let i = 0; i<int;i++){
        re.push(CLS_ON)
      }
      if (has) {
        re.push(CLS_HALF)
      }
      while(re.length<LENGTH){
        re.push(CLS_OFF)
      }
      return re
    }
  }
 } 
</script>
<style>
  .star{
    padding: 15px 0;
  }
  .star-48{
    text-align: center;
  }
  .star-48 .star-item{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 22px;
  }
  .star-48 .star-item:last-child{
    margin-right: 0;
  }
  .star-48 .star-item.on{
    background:  url(./star48_on@2x.png) no-repeat;
    -webkit-background-size: 20px 20px;
    background-size: 20px 20px;
  }
  .star-48 .star-item.half{
    background:  url(./star48_half@2x.png) no-repeat;
    -webkit-background-size: 20px 20px;
    background-size: 20px 20px;
  }
  .star-48 .star-item.off{
    background:  url(./star48_off@2x.png) no-repeat;
    -webkit-background-size: 20px 20px;
    background-size: 20px 20px;
  }
</style>
