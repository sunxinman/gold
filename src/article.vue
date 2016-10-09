<template>
  <div class="article" v-article>
      <div class="ar-head">
        <a class="ar-back" @click="go"></a>
        <h3>文章详情</h3>
        <a class="ar-share"></a>
      </div>
      <div class="ar-cont">
         <div class="ar-dv1">
            <div class="ar-tile">
               <p>
                  <img src="img/img10_02.png">
                  壹心理
               </p>
               <h3>
                  编辑<span>|今天</span>
               </h3>
            </div>
            <div class="ar-dv2">
                贾樟柯：高考之后，放虎归山
            </div>
            <div class="ar-dv3">
              <img src="img/img10_01.png">
              <p>
                 不管对高考怀着怎样的情感，每年高考的那几天,很多人都会不自觉关注，有吐槽，也有回忆。对于大部分人而言至少在高考发生的那一刻，是革命性中国导演贾樟柯的新作剧中出现了三次人们站在一条长蛇般蜿蜒而过的河流旁的情景。在第一戏幕理，只有两个人回到河边，点起了一第二次捆炸药三人中只有一个人了。每个人的生活经历和中国的变化一样深刻一样深刻一样深刻一样
              </p>
            </div>
            <div class="ar-dv4">
              <p>
                 发杂的变化，河上一连窜快速的爆炸展现出一场灾难暗示着一个被淹没的世界历和中国的变化一样深刻发杂的变化河上一连窜快速的爆炸展现出一场灾难暗示着一个被淹没的世界
              </p>
              <img src="img/img10_03.png">
            </div>
         </div>
      </div>
      <div class="ar-men">
         <div class="ar-dv5">
             <div class="ar-tit">
                 <span></span>
                 <h5>分享到</h5>
                 <i></i>
             </div>
             <div class="ar-uls">
                 <img src="img/img4_06.png">
                 <img src="img/img4_07.png">
                 <img src="img/img4_08.png">
             </div>
             <div class="ar-close">X</div>
         </div>
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
   @import "./css/article.css"
</style>
