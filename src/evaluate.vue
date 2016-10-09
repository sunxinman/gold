<template>
  <div class="evaluate">
     <header class="ev-head">
          <a class="ev-back" @click="go">返回</a>
          <h3>电影评分</h3>
     </header>
     <div class="ev-cont">
       
     </div>
  </div>
</template>

<script>
   export default {
        methods:{
            go () {
               this.$router.go("./transmit")
            }
        }
   }
</script>

<style scoped>
@import "./css/evaluate.css";
 
</style>
