<template>
  <div class="conts">
      <router-view></router-view>
  </div>
</template>

<script>
import zepto from '../js/zepto.min.js'
(function($){
	$(".conts").live("swipeRight",function(){
         $(this).css({"transform":"translate(65%,0)","transition":"all .5s"})
	}) 
	$(".conts").live("swipeLeft",function(){
         $(this).css({"transform":"translate(0,0)","transition":"all .5s"})
	}) 
})(Zepto)
export default {
  data () {
    return {

    }
  }
}
</script>


<style scoped>
    .conts{
    	position:absolute;
    	width:100%;
    	height:100%;
    	font-size:0.3rem;
    }
</style>
