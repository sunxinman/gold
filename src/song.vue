<template>
  <div class="song" v-song>
      <header class="so-head">
          <a class="so-back" @click="go"></a>
          <h3>灵感笔记</h3>
      </header>
      <div class="so-cont">
        <div class="so-dv1">
           <dl class="so-dls">
              <dt>
                <img src="img/img9_01.png">
              </dt>
              <dd>
                 <p>Making love Out of nothing...</p>
                 <h4>Jim Steinman</h4>
                 <a></a>
              </dd>
           </dl>
           <img src="img/img8_05.png" class="so-img">
        </div>
        <div class="so-dv1">
           <dl class="so-dls">
              <dt>
                <img src="img/img8_03.png">
              </dt>
              <dd>
                 <p>那个喝醉的夜晚挡不住我们的步伐</p>
                 <h4>纣王.草堆民谣</h4>
                 <a></a>
              </dd>
           </dl>
           <img src="img/img8_05.png" class="so-img">
        </div>
        <div class="so-dv1">
           <dl class="so-dls">
              <dt>
                <img src="img/img9_02.png">
              </dt>
              <dd>
                 <p>故乡啊 山川</p>
                 <h4>李健.原创音乐人</h4>
                 <a></a>
              </dd>
           </dl>
           <img src="img/img8_05.png" class="so-img">
        </div>
        <div class="so-dv1">
           <dl class="so-dls">
              <dt>
                <img src="img/img9_03.png">
              </dt>
              <dd>
                 <p>三十岁的女人</p>
                 <h4>赵雷.民谣歌手</h4>
                 <a></a>
              </dd>
           </dl>
           <img src="img/img8_05.png" class="so-img">
        </div>
        <div class="so-dv1">
           <dl class="so-dls">
              <dt>
                <img src="img/img9_05.png">
              </dt>
              <dd>
                 <p>To Make You Feel My Love</p>
                 <h4>Garth Brooks the UItimate Hits</h4>
                 <a></a>
              </dd>
           </dl>
           <img src="img/img8_05.png" class="so-img">
        </div>
        <div class="so-dv1">
           <dl class="so-dls">
              <dt>
                <img src="img/img9_06.png">
              </dt>
              <dd>
                 <p>一个人的北京</p>
                 <h4>好妹妹乐队.民谣乐队</h4>
                 <a></a>
              </dd>
           </dl>
           <img src="img/img8_05.png" class="so-img">
        </div>
        <div class="so-dv1">
           <dl class="so-dls">
              <dt>
                <img src="img/img9_07.png">
              </dt>
              <dd>
                 <p>To Make You Feel My Love</p>
                 <h4>Garth Brooks the UItimate Hits</h4>
                 <a></a>
              </dd>
           </dl>
           <img src="img/img8_05.png" class="so-img">
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
          this.$router.go("./home/my-music");
     }
  }
}
</script>

<style scoped>
@import "./css/song.css"
</style>
