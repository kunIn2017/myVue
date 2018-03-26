<template>
  <div class="littletitle">
    <div class="title-img">
        <img :src="data.url">
    </div>
    <p>{{data.text}}</p>
  </div>

</template>

<script>
export default {
  name: 'littletitle',
  data () {
      return {
        
      }
    },
    props:['data']

}
</script>

<style lang="less">
.dis{
    display:inline-block;
    vertical-align: middle;
}
.littletitle{
    background-color:#fff;
    padding:.12rem 0;
    padding-left:.1rem;
    .title-img{
        width:.18rem;
        height:.18rem;
        .dis;
    }
    p{
        .dis;
    }
}
</style>
