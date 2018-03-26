<template>
  <div class="album">
    <div class="icon-big-box hor">
        <div v-for="(datas,index) in data.data" class="icon-box" :style="{width:100/data.data.length+'%'}">
            <img :src="datas.url">
            <span>{{data.iconName[index]}}</span>
        </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'ClassIcon',
  data () {
      return {
        
      }
    },
    props:['data']

}
</script>

<style lang="less">
.album{
    padding:.1rem 0.16rem;
    font-size:0;
    background-color:#fff;
    .icon-box{
        img{
            display:block;
            width:.36rem;
            height:.36rem;
            margin:0 auto;
        }
        span{
            display:block;
            text-align:center;
            font-size:.12rem;
        }
    }
}
</style>
