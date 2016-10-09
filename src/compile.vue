<template>
  <div class="compile" v-compile>
      <header class="co-head">
      	  <a class="co-back" @click="go"></a>
      	  <h3>编辑资料</h3>
      </header>
      <div class="co-cont">
      	 <ul>
      	 	<li>
      	 		<span>基本资料</span>
      	 	</li>
      	 	<li class="co-lis1">
      	 		<span>头像</span>
      	 		<img src="img/img1_1_03.png">
      	 	</li>
      	 	<li class="co-lis2">
      	 		<span>文学字号</span>
      	 		<p>山河女鬼</p>
      	 		<a></a>
      	 	</li>
      	 	<li>
      	 		<span>隐私</span>
      	 	</li>
      	 	<li class="co-lis3">
      	 		<span>隐藏笔记</span>
      	 		<label></label>
      	 	</li>
      	 	<li class="co-lis3">
      	 		<span>隐藏歌单</span>
      	 		<label></label>
      	 	</li>
      	 	<li class="co-lis3">
      	 		<span>隐藏其它收藏</span>
      	 		<label></label>
      	 	</li>
      	 </ul>
      </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  methods:{
  	 go () {
  	 	 this.$router.go("./home/foo")
  	 }
  }
}
</script>

<style scoped>
   @import "./css/compile.css"
</style>
