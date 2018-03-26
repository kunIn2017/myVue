<template>
  <div>
{{setdata}}
    <div class="count">
        <span>倒计时</span><em>{{myData.hour}}</em><span>:</span><em>{{myData.min}}</em><span>:</span><em>{{myData.secound}}</em>
    </div>
    <div class="count-load hor">
        <div class="sold-text">已售10%</div>
        <div class="has-load">
            <p class="load"></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountDown',
  data () {
      return {
        myData:{hour:0,min:0,secound:0}
      }
    },
    props:['data'],
    computed: {
        setdata: function(){
         var overtime=(1*new Date(this.data.overtime).getTime())/1000;
         var nowtime=(1*new Date().getTime())/1000;
         var hastime=overtime-nowtime;//剩下的秒数
         var hour=parseInt(hastime/3600);
         var min=parseInt((hastime-(hour*3600))/60);
         var secound=parseInt(hastime-(hour*3600)-(60*min));
         this.myData.hour=hour;
         this.myData.min=min;
         this.myData.secound=secound;
      }

    }
}
</script>

<style lang="less">
    .count{
        background-color:#f1f2f6;
        padding:0 .03rem;
        font-size:0;
        span,em{
            display:inline-block;
            vertical-align:middle;
            font-size:.12rem;
        }
        em{
            background-color:#9a9a9a;
            border-radius:.04rem;
            padding:0 .02rem;
            margin:0 .02rem;
            color:#fff;
        }
    }
    .count-load{
        margin-top:.06rem;
        padding-left:.04rem;
        align-items:center;
        .has-load{
            border:1px solid #9a9a9a;
            flex:1;
            height:.06rem;
            margin-left:.1rem;
            border-radius:.04rem;
            overflow:hidden;
            p.load{
                background-color:red;
                width:10%;
                height:100%;
                transition:width .5s ease;
                padding:0;
            }
        }
    }


</style>
