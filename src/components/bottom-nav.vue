<template>
  <div class="footer hor">
  <div class="f-box"><router-link to="/index"><i class="icon-shouye1 iconfont"></i><span>首页</span></router-link></div>
    <div class="f-box"><router-link to="/shopping"><i class="icon-gouwuche iconfont"></i><span>购物</span></router-link></div>
    <div class="f-box"><router-link to="/hot"><i class="icon-huo iconfont"></i><span>热门</span></router-link></div>
    <div class="f-box"><router-link to="/my"><i class="icon-wode iconfont"></i><span>我的</span></router-link></div>
  </div>

</template>

<script>
export default {
  name: 'navDiv',
  data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
}
</script>

<style lang="less">


.pp{
  position:relative;
  display:block;
}
.footer{
  width:100%;
  padding-top:.05rem;
  text-align:center;
  position:fixed;
  bottom:0;
  left:0;
  background:#fff;
  z-index:9999;
  box-shadow: rgb(238, 238, 238) 0px 0px 1px;
  &:before{
    position:absolute;
    content: "";
    height:1px;
    background:#d5d5d5;
    width:100%;
    top:0;
    -webkit-transform:scaleY(.5);
    -ms-transform:scaleY(.5);
    -o-transform:scaleY(.5);
    transform:scaleY(.5);
  }
  .f-box{
    width:25%;
    height:.4rem;
    font-size:0;
    i.iconfont{
      font-size:.24rem;
      top:-.06rem;
      .pp
    }
    a{
      color:rgb(136, 136, 136);
    }
    span{
      font-size:.12rem;
      top:-0.14rem;
      .pp
      
    }
    .active{
      color:rgb(127, 76, 230);
    }
  }
}
</style>
