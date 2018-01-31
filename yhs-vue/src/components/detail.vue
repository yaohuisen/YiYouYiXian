<template>
	<div class="detail" v-if="flag">
		<div class="Top" >
			<div class="lunbo" >
				<mt-swipe :auto="4000">
				  <mt-swipe-item v-for="item in date[0].imageList">
				  	<img  v-lazy.container="item" class="img1"/>
				  </mt-swipe-item>	
			</mt-swipe>
		</div>
		<div class="ShowSpecial_message" >
			<div class="merchant">
				<div class="tu">
					<img src="http://s.1x1u.cn//images/default-head.png"/>
				</div>
				<h1>{{date[0].shopName}}</h1>
			</div>
			<div class="p">
				<p>{{date[0].recommended_reason}}</p>
			</div>
		</div>
		<div class="product_shop" >
			<div class="line">
				<span class="s1">￥{{date[0].price}}</span>
				<span class="s2">{{date[0].market_price}}</span>
			</div>
			<div class="txt">
				供货商：仅供水果杂货铺
			</div>
			<div class="kucun">
				库存：充足 销量：{{date[0].sales}}
			</div>
		</div>
		<div class="specification">
			<div class="con">
				<span>数量</span>
				<a href="javascript:;" class="pre" @click="pre()">-</a>
				<input type="text" value="1" v-model="sum"/>
				<a href="javascript:;" class="next" @click="next()">+</a>
			</div>
		</div>
		<div class="detail1" v-if="flag">
			<div class="weui_navbar">
				商品详情
			</div>
			<ul>
				<li v-for="item in date[0].introduction">
					<img  v-lazy.container="item" class="img1"/>
				</li>
			</ul>
		</div>
		</div>
		<div class="Bot">
			<div class="left">
				<ul>
					<li>
						<router-link to="/"><i class="iconfont">&#xe636;</i></router-link>
						<p>首页</p>
					</li>
					<li>
						<i class="iconfont">&#xe651;</i>
						<p>收藏</p>
					</li>
					<li @click="go()">
						<i class="iconfont">&#xe631;</i>
						<p>购物车</p>
					</li>
				</ul>
			</div>
			<button type="button" class="b1" @click="addToCart()">加入购物车</button>
			<button type="button" class="b2" @click="addToCart()">购买</button>
		</div>
	</div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import Swiper from "swiper";

export default {
	name : "detail",
	data(){
		return {
			date:[],
			sum:1,
			idA : "",
			flag:false
		}
	},
	mounted(){
		
		this.banners()
	},
	methods:{
		banners(){
			var id = this.$route.params.fid;
			this.idA = id;
			axios.get(`/good/goods/?id=${id}`)
			.then((res)=>{
				var that = this;
				this.date = res.data
				this.$nextTick(function(){
					that.flag = true;
				})
			})
		},
		next(){
			this.sum++
		},
		pre(){
			this.sum--
			if(this.sum <= 0){
				this.sum = 1
			}
		},
		addToCart(){
			var that = this
			var username = this.$store.state.username
			if(username == ""){
				this.$router.history.push("/login")
			}else{
				axios.get(`/good/getNum/?id=${this.idA}&username=${username}`)
				.then(function(res){
					console.log(res)
					var goodNum = res.data[0].goodNum || res.data;
					console.log(goodNum)
					
					axios.post('/good/addToCart', {
					   	username:username,
					   	price:that.date[0].price,
					   	img:that.date[0].imageList[0],
						Info:that.date[0].shopName+that.date[0].recommended_reason,
						num:that.sum,
						id:that.idA,
						hasNum : goodNum
				   	
				  })
				  .then(function (response) {
				    console.log(response);
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
				})
				
				
			}
		},
		go(){
			this.$router.history.push("/login")
		}
	}
}
</script>

<style scoped>
	@import '../assets/css/swiper.min.css';
	@import '../assets/iconfont/iconfont.css';
	.Top{
		flex: 1;
		width: 100%;
		overflow-y: auto;
	}
	.detail{
		font-size: 0.14rem;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #fff;
	}
	.img1{
		min-height: 1rem;
	}
	img{
		width: 100%;
		
	}
	.lunbo{
		width: 100%;
		height: 3.2rem;
	}
	.ShowSpecial_message{
		width: 100%;
		height: 0.88rem;
		padding: 0 10px;
	}
	.merchant{
		width: 100%;
		height: 0.46rem;
		border-bottom: 1px solid #ccc;		
		position: relative;
	}
	.tu{
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 50%;
		position: absolute;
		left: 0.1rem;
		bottom: 0;
	}
	.merchant h1{
		line-height: 0.44rem;
		color: #333;
		margin-left: 0.9rem;
		font-size: 0.14rem;
	}
	.p{
		width: 100%;
		height: 0.42rem;
		padding: 0.1rem 0;
		font-size: 0.1rem;
	}
	.p p{
		margin-left: 0.4rem;
	}
	.product_shop{
		width: 3.2rem;
		height: 1.23rem;
		padding: 0 0.1rem 0.1rem 0.1rem;
	}
	.line{
		width: 100%;
		height: 0.43rem;
		padding-top: 0.1rem;
		text-align: center;
		line-height: 0.42rem;
		
	}
	.s1{
		font-size: 0.2rem;
		color: #980000;
	}
	.s2{
		font-size: 0.12rem;
		color: #333;
		text-decoration: blink;
	}
	.txt,.kucun{
		width: 100%;
		height: 0.3rem;
		line-height: 0.3rem;
		text-align: center;
	}
	.kucun{
		margin-top: 10px;
		background: #e4e4e4;
		border-radius: 0.15rem 0.15rem 0.15rem 0.15rem;
	}
	.specification{
		width: 100%;
		height: 0.55rem;
		padding: 0.1rem 0;
		margin-bottom: 0.1rem;
	}
	.con{
		width: 60%;
		height: 100%;
		display: flex;
		flex-direction: row;
		padding-left: 40px;
	}
	.con span{
		
		display: flex;
		width: 0.4rem;
	}
	.con input{
		width: 0.7rem;
		height: 0.25rem;
		padding: 0.1rem;
	}
	.con a{
		width: 0.25rem;
		height: 0.25rem;
		text-align: center;
		line-height: 0.25rem;
		background: #ccc;
	}
	.detail1{
		width: 100%;
		padding: 0.1rem 0;
	}
	.weui_navbar{
		width: 100%;
		height: 0.48rem;
		background: #CCCCCC;
		text-align: center;
		line-height: 0.48rem;
	}
	.detail1 ul,.detail1 li{
		width: 100%;
	}
	li{
		list-style: none;
	}
	.Bot{
		width: 100%;
		height: 0.51rem;
		border-bottom: 1px solid #ccc;
		background: #fff;
		display: flex;
		justify-content: space-between;
	}
	.Bot .left{
		width: 128px;
		height: 100%;
	}
	.Bot ul{
		width: 100%;
		height: 100%;
		display: flex;
	}
	.Bot li{
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		align-content: space-around;
	}
	.Bot i,.Bot p{
		width: 100%;
		text-align: center;
	}
	.Bot i{
		font-size: 0.18rem!important;
	}
	.Bot a{
		width: 100%;
		text-align: center;
	}
	button{
		width: 96px;
		height: 50px;
		
		border: 0;
		font-size: 0.16rem;
		color: #fff;
	}
	.b1{
		background: #22AC37;
	}
	.b2{
		background: #980000;
	}
</style>
