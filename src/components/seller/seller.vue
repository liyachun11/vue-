<template>
  <div class="abc">
    <h4>{{ msgrr }}</h4>
    <button v-on:click='ann'>按钮</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msgrr: '这个是在lyc.vue过来的',
    }
  },
  methods:{
    ann:function(){
      console.log(12)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
