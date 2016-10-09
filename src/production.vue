<template>
  <div class="production" v-production>
     <header class="pro-head" >
         <a class="pro-back"></a>
         <h3>作品详情</h3>
         <a class="pro-details"></a>
     </header>
     <div class="pro-cont">
         <div class="pro-banner">
             <img src="img/img4_02_07.png">
         </div>
         <div class="pro-dv1">
            <h4>《孤独的世界》</h4>
            <p>
              禁锢太久了，笼子便是世界 心被锁住 永远生活与孤岛
              永远相信黑夜的长翼下 会藏着一个希望的晨曦
            </p>
            <div class="pro-tu">
                <span></span>
                <i @click="go"></i>
            </div>
         </div>
         <div class="pro-dv2">
             <span></span>
             <h4>作者详情</h4>
             <i></i>
         </div>
         <div class="pro-dv4">
             <img src="img/img4_05_18.png">
             <p>山河女鬼</p>
             <span>中国.北京</span>
             <label>中央美术学院10级毕业生  自由画师</label>
             <h5>89件作品/859位业内人士关注</h5>
         </div>
     </div>
     <div class="pro-men">
         <div class="pro-dv5">
             <div class="pro-tit">
                 <span></span>
                 <h5>分享到</h5>
                 <i></i>
             </div>
             <div class="pro-uls">
                 <img src="img/img4_06.png">
                 <img src="img/img4_07.png">
                 <img src="img/img4_08.png">
             </div>
             <div class="pro-close">X</div>
         </div>
     </div>
  </div>
</template>

<script>
export default {
  components: {
     data () {
        
     }
  },
  methods:{
     go () {
          this.$router.go('../appraise')
     }
  }
}
</script>

<style scoped>
@import "./css/production.css"
</style>
