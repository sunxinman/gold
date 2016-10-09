<template>
  <div class="enshrine" v-enshrine>
     <header class="en-head">
        <a class="en-back" @click="go">返回</a>
        <h3>影视收藏</h3>
        <a class="en-share">分享</a>
     </header>
     <div class="en-cont">
        <div class="en-dv1">
           <dl>
              <dt><img src="img/img7_07_03.png"></dt>
              <dd>
                 <h4>《黄金时代》</h4>
                 <span>导演：Chopra</span>
                 <label>9.0</label>
                 <p>
                    我不能选择怎么生，怎么死，但是我能决定怎么爱，怎么活这是我要的自由，我的黄金时代那一天我二十一岁，在我一生的黄金时代，我......
                 </p>
              </dd>
           </dl>
        </div>
        <div class="en-dv1">
           <dl>
              <dt><img src="img/img7_08_06.png"></dt>
              <dd>
                 <h4>《曼走》</h4>
                 <span>导演：Chopra</span>
                 <label>8.8</label>
                 <p>
                    科比退役，96黄金一代终于落幕！陪伴了20年的风光！see you again，然而即使有下一个科比，我们也没有第二个青春去追随，致敬科比，告别我们那些一去不复返的无悔青春......
                 </p>
              </dd>
           </dl>
        </div>
        <div class="en-dv1">
           <dl>
              <dt><img src="img/img7_08_08.png"></dt>
              <dd>
                 <h4>TRUMAN</h4>
                 <span>导演：Chopra</span>
                 <label>7.9</label>
                 <p>
                    禁锢太久了，笼子便是世界 心被锁住永远生活于孤岛永远相信黑夜的长翼下 会藏着一个希望的晨曦......
                 </p>
              </dd>
           </dl>
        </div>
        <div class="en-dv1">
           <dl>
              <dt><img src="img/img7_09_10.png"></dt>
              <dd>
                 <h4>北京遇上西雅图</h4>
                 <span>导演：Chopra</span>
                 <label>9.1</label>
                 <p>
                    禁锢太久了，笼子便是世界 心被锁住永远生活于孤岛永远相信黑夜的长翼下 会藏着一个希望的晨曦......
                 </p>
              </dd>
           </dl>
        </div>
     </div>
     <div class="en-men">
         <div class="en-dv5">
             <div class="en-tit">
                 <span></span>
                 <h5>分享到</h5>
                 <i></i>
             </div>
             <div class="en-uls">
                 <img src="img/img4_06.png">
                 <img src="img/img4_07.png">
                 <img src="img/img4_08.png">
             </div>
             <div class="en-close">X</div>
         </div>
     </div>
  </div>
</template>

<script>
   export default {
      methods:{
        go () {
          this.$router.go("./home/film")
        }
      }
   }
</script>

<style scoped>
@import "./css/enshrine.css";
 
</style>
