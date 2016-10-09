<template>
  <div class="h-page">
    <header class="h-head">
    	<a class="h-det" @click="go">详情</a>
    	<h3>阅读</h3>
    	<a class="h-seek">搜索</a>
    </header>
    <div class="h-carousel">
      <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="img/img2_3_10.png"></div>
            <div class="swiper-slide"><img src="img/img2_4_11.png"></div>
            <div class="swiper-slide"><img src="img/img2_5_12.png"></div>
            <div class="swiper-slide"><img src="img/img2_6_17.png"></div>
            <div class="swiper-slide"><img src="img/img2_8_25.png"></div>
            <div class="swiper-slide"><img src="img/img2_13_40.png"></div>
          </div>
           <div class="swiper-pagination"></div>
       </div>
    </div>
    <div class="h-cont">
    	<div class='h-dv1'>
    		<div class="h-dv2">
    			<h1>
    			   <p class="h-p1">
    				 <img src="./img/img2_7_21.png">
    				 <span>壹心理</span>
                   </p>
                   <p class="h-p2">
    				 <a>编辑推荐</a>
    				 <span>|  今天</span>
                   </p>
    			</h1>
    			<h2><a v-link="{path:'../article'}" style="color:#2B2B2B">贾樟柯：高考之后，放虎归山</a></h2>
    			<p class="h-p6">
    				不管对高考怀着怎样的情感，每年高考的那几天，很多人都会不自觉的关注，又吐槽，也有回忆。对于大部分人而言至少在高考发生的那一刻...
    			</p>
    			<div class="h-img">
    				<img src="img/img2_8_25.png">
    				<img src="img/img2_9_27.png">
    				<img src="img/img2_10_29.png">
    			</div>
    		</div>
    		<div class="h-dv2">
    			<h1>
    			   <p class="h-p1">
    				 <img src="./img/img2_11_35.png">
    				 <span>FT中文网</span>
                   </p>
                   <p class="h-p2">
    				 <a>编辑推荐</a>
    				 <span>|  今天</span>
                   </p>
    			</h1>
    			<h2><a v-link="{path:'../article'}" style="color:#2B2B2B">贾樟柯：高考之后，放虎归山</a></h2>
    			<p class="h-p6">
    				不管对高考怀着怎样的情感，每年高考的那几天，很多人都会不自觉的关注，又吐槽，也有回忆。对于大部分人而言至少在高考发生的那一刻...
    			</p>
    			<div class="h-img">
    				<img src="img/img2_12_38.png">
    				<img src="img/img2_13_39.png">
    				<img src="img/img2_13_40.png">
    			</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
import swiper from './js/swiper.min.js'
import zepto from './js/zepto.min.js'
export default {
  components: {

  },
  ready () {
            this.$nextTick(()=>{
              var swiper = new Swiper('.swiper-container', {
                      pagination: '.swiper-pagination',
                      paginationClickable: true,
                      centeredSlides: true,
                      autoplay: 2000,
                      loop :true             
             })
        })
    },
  methods:{
      go () {
          this.$router.go("../edit");
      }
  }
}
</script>
 
<style>
  @import "./css/swiper.min.css";
  @import "./css/foo.css";
  .swiper-container{
  width:100%;
  height:100%;
}
.swiper-wrapper{
  width:100%;
  height:100%;
}
.swiper-slide{
  width:100%;
  height:100%;
}
.swiper-slide img{
  width:100%;
  height:100%;
}
.swiper-pagination-bullet-active{
  background:#fff;
}
</style>
