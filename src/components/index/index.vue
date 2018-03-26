<template>
  <div>
    <Swiper :img="imgMsg"></Swiper>
    <ClassIcon :data="Classdata"></ClassIcon>
    <div class="img-box">
      <img src="static/images/s1.png">
    </div>
    <div class="img-box">
      <img src="static/images/s2.png">
      <p class="text-hidden text-center">今日热点 | 《择天记》开播鹿晗的盛世美颜,赶紧拿出你们的相机来啊.姐妹们</p>
    </div>
    <div class="index-list">
      <Littletitle :data="littletitle[0]"></Littletitle>
      <indexList :data="goodsmsg"></indexList>
    </div>
  </div>
</template>

<script>
import Swiper from 'components/swiper'
import ClassIcon from 'components/class'
import Littletitle from 'components/littletitle'
import indexList from 'components/index-list'

let url={data: [{url:"static/images/banner1.png"},{url:"static/images/banner2.png"},{url:"static/images/banner2.png"}],
  isP:true,
  isScroll:false,
  isArrow:false
};

let classdata={
  data:[
    {url:"static/images/icon1.png"},
    {url:"static/images/icon2.png"},
    {url:"static/images/icon3.png"},
    {url:"static/images/icon4.png"}
  ],
  iconName:["优选","热销","分类","优惠"]
}

let littletitle=[
  {text:"即时抢购",url:"static/images/icon5.png"},
  {text:"潮流穿搭",url:"static/images/icon6.png"},
  {text:"每周流行",url:"static/images/icon7.png"},
  {text:"精选专题",url:"static/images/icon8.png"}
];


let goodsmsg=[
  {url:"static/images/goods1.png",name:"精品优选 裙子",nowprice:50,oldprice:56,overtime:'2018-3-27 00:00:00',sold:650,has:1000},
  {url:"static/images/goods2.png",name:"名牌场 上衣",nowprice:77,oldprice:82,overtime:'2018-3-27 00:00:00',sold:250,has:1000},
  {url:"static/images/goods3.png",name:"时尚美 女装上衣",nowprice:44,oldprice:60,overtime:'2018-3-28 00:00:00',sold:150,has:1000},
  {url:"static/images/goods4.png",name:"限时抢购 上衣",nowprice:39,oldprice:88,overtime:'2018-3-28 00:00:00',sold:550,has:1000}
];
export default {
  data () {
      return {
        imgMsg: url,
        Classdata: classdata,
        littletitle: littletitle,
        goodsmsg:goodsmsg
      }
  },
  components: {
    Swiper,
    ClassIcon,
    Littletitle,
    indexList
  }
}
</script>

<style lang="less">
.bg-white{
  background-color:#fff;
}
.margin-t08{
  margin-top:.08rem;
}
.img-box{
  padding:.1rem;
  .margin-t08;
  .bg-white;
  img{
    border-radius:.04rem;
  }
  p{
    margin-top:.08rem;
  }
}
.index-list{
  .margin-t08;
  .bg-white;
}
</style>
