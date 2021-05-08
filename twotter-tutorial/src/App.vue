<template>
 <div id="app">
     <nav>
         <div class="navigation_logo">
             Twotter
         </div>
         <div class="navigation_user">
             {{ user.username }}
         </div>
     </nav>
     <Userprofile/>
 </div>
</template>

<script>
import Userprofile from "./components/Userprofile";

export default {
	name: 'App',
	components:{ Userprofile },
	data() {
		return {
			user: {
				username: "_Chandrika"
			}
		}
	}
}					
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	min-height:100vh;
	background-color:#F3F5FA;

	nav {
		display:flex;
		align-items:center;
		justify-content:space-between;
		padding:10px 5%;
		background-color: deeppink;
		color:white;

		.navigation_logo {
			font-weight:bold;
			font-size:24px;
		}
	}
}
</style>
