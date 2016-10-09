<template>
  <div class="film">
     <header class="fi-head">
         <a class="fi-a1" @click="gos"></a>
         <h3>影视</h3>
         <a class="fi-a2"></a>
     </header>
     <div class="fi-cont">
        <div class="fi-dv1">
           <div class="swiper-container">
             <div class="swiper-wrapper">
              <div class="swiper-slide fi-bg1" @click="go"></div>
              <div class="swiper-slide fi-bg2" @click="go"></div>
              <div class="swiper-slide fi-bg3" @click="go"></div>
              <div class="swiper-slide fi-bg4" @click="go"></div>
            </div>
           </div> 
         </div>
         <div class="fi-text">
             <h3>黄金时代</h3>
             <span>THE GOLDEN ERA</span>
             <p>有人任命，有人顺命，有人抗命，希望<br/>和失望交错选择，瑜尔一生</p>
         </div>
     </div>

  </div>
</template>

<script>
import swiper from './js/swiper.min.js'
export default {
    data () {
      return {
         }
   },
   ready () {
            this.$nextTick(()=>{
               var swiper = new Swiper('.swiper-container', {
                     effect: 'cube',
                     grabCursor: true,
                     cube: {
                         shadow: true,
                         slideShadows: true,
                         shadowOffset: 20,
                         shadowScale: 0.94
                      }             
                 })
            })
    },
   methods:{
      go () {
          this.$router.go("../transmit")
      },
      gos () {
           this.$router.go("../enshrine")
      }
   }
}
</script>

<style scoped>
@import "./css/swiper.min.css";
@import "./css/film.css";
 .swiper-container {
        width: 5.25rem;
        height:7.3rem;
        position: absolute;
    }
.swiper-slide {
        background-position: center;
        background-size: cover;
    } 
</style>
