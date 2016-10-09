<template>
  <div class="music">
      <header class="mu-head">
      	<a class="mu-details"></a>
      	<h3>音乐</h3>
      	<a class="mu-ranking" @click="go"></a>
      </header>
      <div class="mu-cont">
        <div class="mu-banner">
      	 <img src="img/img6_01_02.png">
      	 <div class="mu-play">
      	 	<div class="mu-dv1">
      	 		<img src="img/img1_1_03.png">
      	 		<p>李建<span>原创音乐人</span></p>
      	 		<h4>贝加尔湖畔</h4>
      	 	</div>
      	 	<div class="mu-dv2">
      	 		<img src="img/img6_04_10.png">
      	 		<p>Jun 14.2016</p>
      	 	</div>
      	 </div>
        </div>
        <div class="mu-lyric">
        	<h3>歌词</h3>
        	<a class="mu-ci"></a>
        	<a class="mu-lick"></a>
        </div>
        <div class="mu-text">
        	<p>
        		在你的怀里 在你的梦里<br/>
        		这一生一世 有多少迷惘<br/>
        		我们流连忘返 在贝加尔湖畔<br/>
        		在你的怀里 在你的梦里<br/>
        		这一生一世 有多少迷惘<br/>
        		在你的怀里 在你的梦里<br/>
        		这一生一世 有多少迷惘<br/>
        		我们流连忘返 在贝加尔湖畔
        	</p>
        </div>
        <div class="mu-h1">
        	<h3>评论列表</h3>
        	<a class="mu-news"></a>
        </div>
        <div class="mu-dls">
        	<dl>
        		<dt><img src="img/img5_02_06.png"></dt>
        		<dd>
        			<p>渐行渐远<a>Jun 14.2016</a></p>
        			<span>伟大的吟唱诗人，空灵与清澈的完美结合</span>
        		</dd>
        	</dl>
        </div>
      </div>
  </div>
</template>

<script>
import zept from './js/zepto.min.js'
export default {
  components: {

  },
  methods:{
     go () {
          this.$router.go("../song")
     }
  }
}
</script>

<style scoped>
@import "./css/my-music.css"
</style>
