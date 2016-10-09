<template>
  <div id="home">
    <Naves></Naves>
    <Conts></Conts>
  </div>
</template>

<script>
import Naves from './components/navs'
import Conts from './components/content'

export default {
  components: {
    Naves,Conts
  }
}
</script>

<style>
#home {
  position:relative;
  width:100%;
  height:100%;
}


</style>
