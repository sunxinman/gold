<template>
  <div class="edit">
     <header class="ed-head" @click="go">
         <a></a>
         <h3>个人阅读</h3>
     </header>
     <div class="ed-cont">
         <div class="ed-dv1">
             <dl>
                 <dt><img src="img/img8_01.png"></dt>
                 <dd>
                     <h4>我的童年是颗野草</h4>
                     <p>我这个人有个毛病，对昨天的以前发生的许多事情，画面的记忆成俗具体而细微，但是您要是问我那些事情发生在什么地方，什么时候发生的....</p>
                 </dd>
             </dl>
         </div>
         <div class="ed-dv2">
             <dl>
                 <dt><img src="img/img8_02.png"></dt>
                 <dd>
                     <h4>我的童年是颗野草</h4>
                     <p>我这个人有个毛病，对昨天的以前发生的许多事情，画面的记忆成俗具体而细微，但是您要是问我那些事情发生在什么地方，什么时候发生的....</p>
                 </dd>
             </dl>
         </div>
         <div class="ed-dv1">
             <dl>
                 <dt><img src="img/img8_03.png"></dt>
                 <dd>
                     <h4>我们好像都认识几个旁观君</h4>
                     <p>我这个人有个毛病，对昨天的以前发生的许多事情，画面的记忆成俗具体而细微，但是您要是问我那些事情发生在什么地方，什么时候发生的....</p>
                 </dd>
             </dl>
         </div>
         <div class="ed-dv2">
             <dl>
                 <dt><img src="img/img8_04.png"></dt>
                 <dd>
                     <h4>当下中国的十二种孤独</h4>
                     <p>我这个人有个毛病，对昨天的以前发生的许多事情，画面的记忆成俗具体而细微，但是您要是问我那些事情发生在什么地方，什么时候发生的....</p>
                 </dd>
             </dl>
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
        this.$router.go("./home/foo")
     }
  }
}
</script>

<style scoped>
@import "./css/edit.css"
</style>
