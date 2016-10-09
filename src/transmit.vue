<template>
  <div class="transmit" v-transmit>
     <div class="tr-head">
       <a class="tr-back" @click="go">返回</a>
       <a class="tr-share">分享</a>
     </div>
     <div class="tr-dv1">
        <h3>黄金时代</h3>
        <p>导演：<span>徐振华</span></p>
        <h4>主演：汤唯/冯邵峰/彭于晏/李治庭</h4>
        <a @click="gos">8.8分</a>
     </div>
     <div class="tr-dv2">
        <h3>剧情介绍</h3>
        <p>“我不能选择怎么生，怎么死，但是我能选择怎么爱，怎么活这是我要的自由，我的黄金时代”那一天我二十一岁，在我一生的黄金时代，我有好多奢望。我想爱，想吃，还想再一瞬间变成天上半明半暗的云......</p>
     </div>
     <div class="tr-dv3">
        <h3>相关推荐</h3>
        <dl>
          <dt><img src="img/img7_03_05.png"></dt>
          <dd>TRUMAN</dd>
        </dl>
        <dl>
          <dt><img src="img/img7_04_07.png"></dt>
          <dd>太阳照常升起</dd>
        </dl>
        <dl>
          <dt><img src="img/img7_05_09.png"></dt>
          <dd>纽约相遇</dd>
        </dl>
        <dl style="margin:0">
          <dt><img src="img/img7_06_11.png"></dt>
          <dd>北京遇上西雅图</dd>
        </dl>
     </div>
     <div class="tr-men">
         <div class="tr-dv5">
             <div class="tr-tit">
                 <span></span>
                 <h5>分享到</h5>
                 <i></i>
             </div>
             <div class="tr-uls">
                 <img src="img/img4_06.png">
                 <img src="img/img4_07.png">
                 <img src="img/img4_08.png">
             </div>
             <div class="tr-close">X</div>
         </div>
     </div>
  </div>
</template>

<script>
   export default {
      methods:{
        go () {
          this.$router.go("./home/film")
        },
        gos () {
            this.$router.go('../evaluate')
        }
      }
   }
</script>

<style scoped>
@import "./css/transmit.css";
 
</style>
