<template>
	<div class="goods">
		<div class="plate today_recommend">
			<div class="today_title title">			
				<div class="left_con"></div>
				<h1>今日推荐</h1>
				<div class="right_con"></div>
			</div>
			<div class="cell">
				<div class="recommend_cell" v-for="item in recommend">
					<img :src="item.image"/>
				</div>
			</div>
		</div>
		<div class="plate channel">
			<div class="channel_title title">			
				<div class="left_con"></div>
				<h1>县优品道</h1>
				<div class="right_con"></div>
			</div>
			
			<div class="cell" >
				<div class="swiper-container">
				  <div class="swiper-wrapper">
				    <div class="swiper-slide" v-for="item in channel">
				    	 <img :src="item.image" />
				    </div>
				    
				</div>
			</div>
		</div>
	</div>
</div>
	
</template>

<script>
import axios from "axios";
import $ from "jquery";
import Swiper from 'swiper';
export default {
	name : "list",
	data(){
		return {
			recommend:[],
			channel:[]
		}
	},
	mounted(){
		this.get_recommend()
		this.wrap_width();
	},
	methods:{
		get_recommend(){
			axios.get("/wx/activity/findIndex?id=10")
			.then((res)=>{
				console.log(res)
				this.recommend = res.data.recommend
			})
		},
		wrap_width(){
			
			console.log(sWidth)
		
			axios.get("/wx/special/homeSpecial")
			.then((res)=>{
	
				this.channel = res.data.specialNews
				this.$nextTick(function(){
					var sWidth = $(".channel .swiper-slide").innerWidth();
					var len = $(".channel .swiper-slide").length;
					console.log("len"+len)
					$(".channel .swiper-wrapper").css({width:sWidth*len});
					
					console.log($(".channel .swiper-wrapper").width())
					var mySwiper = new Swiper('.channel .swiper-container', {
						
							loop:true
					})
				})
			})
			
		}
	}
}
</script>

<style scoped>
@import '../assets/css/swiper.min.css';
.goods{
	font-size:0.14rem;
	width: 100%;
}
img{
	width: 100%;
	height: 100%;
}
.plate{
	width: 100%;
	padding: 0 5px 5px;
	border-top: 1px solid transparent;
	margin-top: 5px;
	background: #fff;
}
.plate .title{
	width: 1.45rem;
	height: 0.35rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
}
.plate h1{
	font-size: 0.14rem;
}
.plate .left_con,.plate .right_con{
	width: 0.2rem;
	height: 0.2rem;
	background: url(../assets/imgs/icon.png) no-repeat;
}
.today_recommend .cell{
	width: 100%;
	height: 1.15rem;
	display: flex;
	justify-content: space-between;
}
.today_recommend .recommend_cell{
	width: 49%;
	height: 100%;
}
.channel .cell{
	width: 100%;
	overflow: hidden;
}
.channel .swiper-slide{
	min-width: 1.2rem!important;
	height: 1.4rem!important;
	box-sizing: border-box;
	padding: 0.05rem;
}
.channel .swiper-wrapper{
	display: flex;
}
.channel img{
	width: 100%!important;
	height: 100%!important;
}
</style>
