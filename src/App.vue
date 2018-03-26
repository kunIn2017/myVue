<template>
  <div id="app">
    <router-view></router-view>
    <inputDiv @transferUser="getUser"></inputDiv>
    <span>你想讲乜7啊:{{user}}</span>
    <navDiv></navDiv>
  </div>
</template>

<script>
import navDiv from './components/bottom-nav'
import inputDiv from './components/input'
export default {
  name: 'App',
  data () {
    return {
      user: '',
      logoMsg: 'Hzk-logo',
    }
  },
  methods: {
    getUser (msg){
      this.user = msg
    }
  },
  components: {
    navDiv,
    inputDiv
  }
}
</script>

<style lang="less">
body{
  background-color: rgb(243, 243, 243);
}
#app{
  width:100%;
  overflow:hidden;
  padding-bottom:.5rem;
}
</style>
