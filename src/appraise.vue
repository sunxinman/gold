<template>
  <div class="appraise" v-appraise>
     <header class="app-head">
         <a class="app-back" @click="go"></a>
         <h3>作品评价</h3>
     </header>
     <div class="app-cont">
       <div class="app-dv1" id="app-dv1">
         <dl>
             <dt>
                 <img src="img/img5_01_03.png">
             </dt>
             <dd>
                 <p>渐行渐远<a>2016-6-18</a></p>
                 <span>伟大的吟唱诗人，空灵与清澈的完美结合</span>
             </dd>
         </dl>
         <dl>
             <dt>
                 <img src="img/img5_02_06.png">
             </dt>
             <dd>
                 <p>渐行渐远<a>2016-6-18</a></p>
                 <span>极简的抽象派化作 无色系运用恰到好处</span>
             </dd>
         </dl>
         <dl>
             <dt>
                 <img src="img/img5_03_08.png">
             </dt>
             <dd>
                 <p>文艺小哥<a>2016-6-18</a></p>
                 <span>极简的抽象派化作 无色系运用恰到好处</span>
             </dd>
         </dl>
         <dl>
             <dt>
                 <img src="img/img5_04_10.png">
             </dt>
             <dd>
                 <p>渐行渐远<a>2016-6-18</a></p>
                 <span>孤独的枷锁一旦解开 梦想就会一飞冲天</span>
             </dd>
         </dl>
       </div>
     </div>
     <div class="app-form">
         <input type="text" name="text" value="我想说" class="app-text">
         <input type="button" value="发送" class="app-btn">
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
         this.$router.go("./home/production")
     }
  }
}
</script>

<style scoped>
@import "./css/appraise.css"
</style>
