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
						<router-link :to="{name:'Detail', params:{fid: item.product}}"><img :src="item.image"/></router-link>
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
			<div class="listA fruit" v-for="(item,index) in data">
					<div class="title">								
						<h1>{{titles[index]}}</h1>				
					</div>					
						<div class="cell">
							<div class="ul">
								<ul>	
									<li v-for="it in item.products">
										<div class="image">
											<img :src="it.image"/>
										</div>
										<p>{{it.name}}</p>
										<span>{{it.price}}</span>
									</li>
								</ul>
						<router-link :to="{name:'More', params:{fid: item.id}}"><div class="more">
									<span>加</span>
									<span>载</span>
									<span>更</span>
									<span>多</span>
								</div>
								</router-link>
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
			channel:[],
			data:[],
			titles:["风情水果","解乏零食","生态零食","夺主配料","最火礼品"],
			posLeft:[]
		}
	},
	mounted(){
		this.get_recommend()
		this.wrap_width();
		this.getFruits()
	},
	methods:{
		get_recommend(){
			axios.get("/wx/activity/findIndex?id=10")
			.then((res)=>{
				console.log(res)
				this.recommend = res.data.recommend
				console.log(this.recommend)
			})
		},
		wrap_width(){
			axios.get("/wx/special/homeSpecial")
			.then((res)=>{
				this.channel = res.data.specialNews
				this.$nextTick(function(){
					var sWidth = $(".channel .swiper-slide").innerWidth();	
					var len = $(".channel .swiper-slide").length;
					$(".channel .swiper-wrapper").css({width:sWidth*len});
					$(".channel .swiper-container").css({width:sWidth*len});
					
				})
			})	
		},
		getFruits(){
			axios.get("/wx/special/homeSpecial")
			.then((res)=>{
				console.log(res)
				this.data = res.data.specials;
				var that = this;
				this.$nextTick(function(){
					var liw = parseInt($(".fruit li").css("width"));
					
					var len = $(".fruit").length;
					for(var i =0;i < len;i ++){

						var lilen = $(".fruit").eq(i).find("li").length;

						$(".fruit").eq(i).find(".ul").css({width:(lilen+1)*liw})


						setInterval(function(){
							var offsetLeft = $(".fruit").eq(i).find(".ul").position()
//							console.log(offsetLeft)
//							$(".fruit").eq(i).find(".ul").css({left:offsetLeft-liw})
//							if(parseInt($(".fruit").eq(i).find(".ul").css("right")) <= 0){
//								$(".fruit").eq(i).find(".ul").css("left",0)
	//						}
						},3000)
					}

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
.plate,.listA{
	width: 100%;
	padding: 0 5px 5px;
	border-top: 1px solid transparent;
	margin-top: 5px;
	background: #fff;
}
.plate .title,.listA .title{
	width: 1.45rem;
	height: 0.35rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 0 auto;
}
.plate h1,.listA h1{
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
	overflow-y: auto;
	position: relative;
}
.channel .swiper-slide{
	width: 1.2rem!important;
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
.listA{
	width: 100%;
	height: 2.06rem;
	overflow-y: hidden;
}

.listA .cell{
	width: 100%;
	overflow: auto;
	position: relative;
	height: 1.56rem;
}
.listA .ul{
	display: flex;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 999;
}

.listA .cell ul{
	display: flex;
	list-style: none;
}
.listA .cell ul li{
	width: 1.03rem;
	height: 1.56rem;
}
.listA .cell  .more{
	width: 1.03rem;
	height: 1.56rem;
	display: flex;
	flex-direction: column;
	align-content: center;
	align-self: center;
	text-align: center;
}
.listA .cell p{
	margin-top: 10px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 100%;
	
}
</style>
