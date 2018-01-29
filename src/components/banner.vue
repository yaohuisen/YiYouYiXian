<template>
<div class="bannerA">
	<div class="banner">
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in banners">
		  	<img :src="item.path"/>
		  </mt-swipe-item>	
		</mt-swipe>
	</div>	
		<div class="list">
			<div class="img">
				<img src="../assets/imgs/list.png" />
			</div>
			<ul>
				<li><i class="iconfont">&#xe610;</i><p>县优故事</p></li>
				<li><i class="iconfont">&#xe631;</i><p>批发市场</p></li>
				<li><i class="iconfont">&#xe612;</i><p>晒都优品</p></li>
				<li><i class="iconfont">&#xe619;</i><p>火热促销</p></li>
			</ul>
		</div>
		
		<div class="radio">
			<div class="left">
				<i class="iconfont">&#xe611;</i>
			</div>
			<p :style="{left:posL/100+'rem'}">{{rad}}</p>
		</div>
	
	</div>
</template>

<script>
	import axios from "axios"
	import $ from "jquery"
	export default {
		name : "banner",
		data(){
			return {
				banners : [],
				rad:"一县一优，网络各县之优，值得拥有",
				posL : 320
			}
		},
		mounted(){
			this.swipe()
			this.move()
		
		},
		methods:{
			swipe(){
				var that = this
				axios.get(`/wx/activity/findIndex?id=10`)
				.then(function(res){
				
					that.banners = res.data.ad
		
				})
			
			},
			move(){
				var that = this;
				var pw = $(".radio p").width();
				var left = parseInt($(".radio p").css("left"))
				var lw = $(".radio .left").width();
				console.log(left)
				var f = lw - pw;
				
				setInterval(function(){
					left --;
					if(left<=f){
						left = 320
					}
					that.posL = left;
					
				},20)
			}
		}
	}
	
</script>

<style scoped>
	@import "../assets/iconfont/iconfont.css";
	.banner{
		width: 100%;
		height: 1.8rem;
	}
	 img{
		width: 100%;
		height: 100%;
	}
	.list{
		width: 100%;
		height: 1.5rem;
		background:url(../assets/imgs/bac.png) no-repeat;
		position: relative;
		top: -20px;
		background-size: 100% auto;
		display: flex;
		margin-bottom: -20px;
	}
	.list ul{
		width: 100%;
		display: flex;
		position: absolute;
		bottom: 20px;
	}
	.img{
		position: absolute;
		top: -8px;
		width: 2.55rem;
		height: 0.62rem;
		left: 50%;
		margin-left: -1.21rem;
	}
	.list li{
		flex: 1;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
	}
	.radio{
		width: 100%;
		height: 0.4rem;
		background: #fff;
		display: flex;
		justify-content: space-between;
		position: relative;
		
	}
	.radio .left{
		width: 0.4rem;
		height: 0.4rem;
		display: flex;
		align-items: center;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 999;
		background: #fff;
	}
	.radio .left .iconfont{
		width: 0.25rem;
		height: 0.25rem;
		border-radius: 50%;
		background: red;
		margin: 0 auto;
		font-size: 0.14rem!important;
		line-height: 0.25rem;
		text-align: center;
	}
	.radio p{
		line-height: 0.4rem;
		position: absolute;
		left: 100%;
		white-space: nowrap;
	}
	i{
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 0.12rem;
		margin: 0 auto;
		text-align: center;
		text-align: center;
		font-size: 0.3rem!important;
		line-height: 0.5rem;
		color: #fff;
	}
	li:nth-child(1) i{
		background: #ff4660;
	}
	li:nth-child(2) i{
		background: #583dff;
	}
	li:nth-child(3) i{
		background: #1dd07a;
	}
	li:nth-child(4) i{
		background: #ff3d99;
	}
	.list p{
		width: 100%;
		text-align: center;
		font-size: 0.14rem;
		color: #333;
	}
</style>