<template>
  <div class="afflatus">
      <header class="af-head">
          <a class="af-back" @click="go"></a>
          <h3>灵感笔记</h3>
          <a class="af-compile"></a>
      </header>
      <div class="af-cont" v-afflatus>
          <div class='af-dv1'>
              <img src="img/img8_05.png" class="af-img1">
              <div class="af-let">
                  <h5>35天前  5月15日  下午 11:42  <span></span></h5>
                  <p>清晨的第一缕阳光照进车厢，惊醒了整夜未眠...  <span></span></p>
              </div>
          </div>
          <div class='af-dv1'>
              <img src="img/img8_05.png" class="af-img1">
              <div class="af-let">
                  <h5>35天前  5月15日  下午 11:42  <span></span></h5>
                  <p>清晨的第一缕阳光照进车厢，惊醒了整夜未眠...  <span></span></p>
              </div>
          </div>
          <div class='af-dv1'>
              <img src="img/img8_05.png" class="af-img1">
              <div class="af-let">
                  <h5>35天前  5月15日  下午 11:42  <span></span></h5>
                  <p>清晨的第一缕阳光照进车厢，惊醒了整夜未眠...  <span></span></p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  ready () {
    
  },
  components: {

  },
  methods:{
     go () {
         this.$router.go("./home/note");
     }
  }
}
</script>

<style scoped>
@import "./css/afflatus.css"
</style>
