<template>
 <div id="app">
  @{{user.username}} - {{fullname}}
  <strong>followers: </strong> {{followers}}
  
  <button @click="followuser">
    Hi
  </button>
 </div>
</template>
<script>


export default {
  name: 'App',
  data() {
    return {
      followers:0,
      user: {
        id:1,
        username:"Chandrika",
        firstname:"chandu",
        lastname:"G"
      }
    }
  },
  watch: {
    followers(newfollowercount,oldfollowercount){
       if(newfollowercount>oldfollowercount) {
          console.log(`${this.user.username} has gained a follower!`)
      }
    }
  },
  computed: {
    fullname() {
      return `${this.user.firstname} ${this.user.lastname}`;
    }
  },
  methods: {
    followuser() {
      this.followers++
    }
  },
  mounted() {
    this.followuser();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display:flex;
  flex-direction:column;
  text-align:center;
}
</style>
