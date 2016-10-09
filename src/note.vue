<template>
  <div class="note">
     <header class="no-head">
     	<a class="no-back" id="no-btn"></a>
     	<h3>笔记详情</h3>
     	<a class="no-write" @click="go"></a>
     </header>
     <div class="no-cont">
     	<div class="no-dv1">
     		<h4 class="no-p1">
     			<span>35天前  5月15日  下午 11:42</span>
     			<p>
     				<label>98字符</label>
     				<i></i>
     			</p>
     		</h4>
     		<ul>
     			<li>回忆难分难舍,一个人孤单的坐在回忆车厢里，</li>
     			<li>内心五味杂陈，过往的一切历历在目。理想与现实</li>
     			<li>存在太多无奈，时间一分一秒的过去，未来越来越</li>
     		</ul>
     		<div class="no-img"></div>
     		<ol>
     			<li>回忆难分难舍,一个人孤单的坐在回忆车厢里，</li>
     			<li>内心五味杂陈，过往的一切历历在目。理想与现实</li>
     			<li>存在太多无奈，时间一分一秒的过去，未来越来越</li>
     			<li>存在太多无奈，时间</li>
     		</ol>
     	</div>
     </div>
  </div>
</template>

<script>
import zepto from './js/zepto.min.js'
export default {
  components: {

  },
  methods:{
      go () {
          this.$router.go("../afflatus");
      }
  }
}
</script>

<style scoped>
@import "./css/note.css"
</style>
