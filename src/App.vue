<template>
  <div id="app">
    <mains/>
    <router-view/>
  </div>
</template>

<script>
	import mains from "./components/main"
export default {
  name: 'App',
  components:{
  	mains
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html,body{
		width: 100%;
		height: 100%;
		
	}
	html{
		font-size: 31.25vw;
	}
	body{
		background: #fafafa;
	}
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
