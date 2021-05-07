<template>
 <div id="app">
  <Userprofile/>
 </div>
</template>

<script>
import Userprofile from "./components/Userprofile";

export default {
  name: 'App',
  components:{Userprofile}
    
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height:100vh;
  background-color:#F3F5FA;
}
</style>
