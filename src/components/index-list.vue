<template>
<div>

  <div class="goods-list hor" v-for="datas in data">
    <div class="goods-pic">
      <img :src="datas.url">
    </div>
    <div class="goods-msg">
      <p class="goods-name text-hidden">{{datas.name}}</p>
      <p class="nowprice">￥{{datas.nowprice.toFixed(2)}}</p>
      <p class="oldprice"><del>￥{{datas.oldprice.toFixed(2)}}</del></p>
      <div class="countdown">
        <CountDown :data="datas"></CountDown>
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import CountDown from 'components/countdown'
export default {
  name: 'indexList',
  data () {
      return {
        myData:""
      }
    },
    computed: {

      
    },
    props:['data'],
    components:{
      CountDown
    }
}
</script>

<style lang="less">
.dis{
    display:inline-block;
    vertical-align: middle;
}
.goods-list{
    border-top:1px solid #f3f3f3;
    background-color:#fff;
    padding:.04rem 0;
    &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
    }
    p{
      padding:0 .1rem;
    }
    .goods-pic{
      img{
        width:.7rem;
        height:.7rem;
      }
    }
    .goods-msg{
      flex:1;
      position:relative;
      .goods-name{
        font-size:.14rem;
      }
      .nowprice{
        color:#f60;
        font-size:.16rem;
        margin:.03rem 0;
      }
      .oldprice{
        color:#a8a8a8;
      }
      .countdown{
        position:absolute;
        right:.1rem;
        bottom:0;
      }
    }
}
</style>
