<template>
  <div>
    <input type="text" @change="setUser" v-model="username" name="keyword" placeholder="请输入关键字">
  </div>
</template>

<script>
export default {
  name: 'inputDiv',
  data () {
      return {
        username: ''
      }
  },
  methods:{
    setUser:function(){
      this.$emit('transferUser',this.username)
    }
  }
}
</script>

<style>

</style>
