<template>
  <div class="Home-Page">
    <div class="swiper-container">
         <div class="swiper-wrapper">
           <div class="swiper-slide">
              <img src="./img/page1.png">
           </div>
           <div class="swiper-slide">
              <img src="./img/page2.png">
           </div>
           <div class="swiper-slide" @click="go">
              <img src="./img/page3.png">
           </div>
         </div>
      </div>
  </div>
</template>

<script>
import swiper from './js/swiper.min.js'
import zepto from './js/zepto.min.js'
export default {
    data () {
      return {
         }
   },
   ready () {
            this.$nextTick(()=>{
              var mySwiper = new Swiper('.swiper-container',{
                       autoplay :false,//可选选项，自动滑动
                       loop :false,//可选选项，开启循环
            })
        })
    },
    methods:{
         go () {
              this.$router.go('./home/foo');
         }
    }
}
</script>

<style scoped>
   @import './css/swiper.min.css';
  @import './css/login.css';

</style>
