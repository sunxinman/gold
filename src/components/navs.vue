<template>
  <div class="navs">
      <div class="n-nav">
         <p class="n-p"></p>
      	 <div class="n-head">
      	 	<dl>
      	 		<dt @click="go"><img src="../img/img1_1_03.png"></dt>
      	 		<dd>山河女鬼</dd>
      	 	</dl>
      	 </div>
      	 <div class="n-dl">
      	 	 <dl>
      	 	   <a v-link="{path:'./note'}">
      	 	 	<dt><img src="../img/img1_3_07.png"></dt>
      	 	 	<dd>笔记</dd>
      	 	   </a>
      	 	 </dl> 
      	 	 <dl>
      	 	   <a>
      	 	 	<dt><img src="../img/img1_2_07.png"></dt>
      	 	 	<dd>消息</dd>
      	 	   </a>
      	 	 </dl> 
      	 	 <dl>
      	 	   <a v-link="{path:'./production'}">
      	 	 	<dt><img src="../img/img1_4_07.png"></dt>
      	 	 	<dd>作品</dd>
      	 	   </a>
      	 	 </dl> 
      	 </div>
      	 <div class="n-ul" v-navse> 
      	 	<ul>
      	 		<li>
      	 		   <a v-link="{path:'./foo'}">
      	 			 <img src="../img/img1_5_19.png">
      	 			 <p>阅读</p>
      	 		   </a>
      	 		</li>
      	 		<li>
      	 		   <a v-link="{path:'./bar'}">
      	 			<img src="../img/img1_3_07.png">
      	 			<p>绘画</p>
      	 		   </a>
      	 		</li>
      	 		<li>
      	 		   <a v-link="{path:'./my-music'}">
      	 			<img src="../img/img1_6_22.png">
      	 			<p>音乐</p>
      	 		   </a>
      	 		</li>
      	 		<li>
      	 		   <a v-link="{path:'./film'}">
      	 			<img src="../img/img1_7_24.png">
      	 			<p>影视</p>
      	 		   </a>
      	 		</li>
      	 		<li>
      	 		   <a v-link="{path:'./setting'}">
      	 			<img src="../img/img1_8_27.png">
      	 			<p>设置</p>
      	 		   </a>
      	 		</li>
      	 		<li>
      	 		   <a>
      	 			<img src="../img/img1_9_29.png">
      	 			<p>个人收藏</p>
      	 		   </a>
      	 		</li>
      	 	</ul>
      	 </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
  methods:{
     go () {
         this.$router.go("../compile");
     }
  }
}
</script>


<style scoped>
    @import "../css/navs.css"
</style>
