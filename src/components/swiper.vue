<template>

<div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="url in img.data" class="swiper-slide">
        <img :src=url.url>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" v-if="img.isP"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev" v-if="img.isArrow"></div>
    <div class="swiper-button-next" v-if="img.isArrow"></div>
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar" v-if="img.isScroll"></div>
  </div>



</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css';
export default {
  name: 'Swiper',
  data () {
      return {
        item: [1,2,3,4,5,3,6],
        ok:true
      }
  },
  methods:{
    
  },
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      pagination : '.swiper-pagination',
      autoplay : 2000,
      loop: true,
    });
  },
  props: ["img"]
}
</script>

<style lang="less">
.swiper-container {
  width: 100%;
  .swiper-pagination-bullet{
    opacity:.45;
    background:#fff;
    bottom:0!important;
  }
  .swiper-pagination-bullet-active{
    background:#fff;
    opacity:1;

  }
}

</style>
