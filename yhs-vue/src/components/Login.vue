<template>
	<div class="login">
		<div class="form" v-if="!($store.state.username)">
			<div class="input-group">
				<span>用户名</span>
				<input type="text" id="username" placeholder="请输入用户名"/>
			</div>
			<div class="input-group">
				<span>密&ensp;&thinsp;&thinsp;码</span>
				<input type="password" id="psw" placeholder="请输入密码"/>
			</div>		
			<button type="button"@click="login()">登录</button>
			<div class="bot">
				<a href="javascript:;">忘记密码</a>
				<a href="javascript:;" @click="regin()">立即注册</a>
			</div>
		</div>
		
		<div class="cart" v-if="$store.state.username">
			<div class="top">
				购物车
			</div>
			<div class="content" v-if="flag">
				你的购物车空空如也。。。<a href="javascript" @click="page()">去首页逛逛吧</a>
			</div>
			<div class="ul" v-if="!flag">
				<ul>
					<p>商品清单</p>
					<li v-for="item in data">
						<dl>
							<dt><img :src="item.goodImg"/></dt>
							<dd>
								<h4>{{item.goodInfo}}</h4>
								<div class="b">
									<span>{{item.goodPrice}}</span>
									<a href="javascript:;" class="pre">-</a>
									<b>{{item.goodNum}}</b>
									<a href="javascript:;" class="next">+</a>
									<button type="button" class="but" >删除</button>
								</div>			
							</dd>
						</dl>
					</li>
				</ul>
				
				
				<div class="sum">
					<div class="heji">
						<span>合计:</span>
						<h1>{{sum}}元</h1>
					</div>
					<input type="button" id="" value="结算" />
				</div>
			</div>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import foot from "./foot";
	import $ from "jquery";
	import axios from "axios";
	export default {
		name :"Login",
		data () {
			return {
				flag:false,
				data:[],
				sum:0
			}
		},
		mounted(){
			this.getGood()
			setTimeout(()=>{
				this.sums()
			},500)
			
		},
		components:{
			foot
		},
		methods:{
			regin(){
				this.$router.history.push("/regin")
			},
			login(){
				var username = $("#username").val();
				var psw = $("#psw").val();
				axios.get(`/good/login/?username=${username}&psw=${psw}`)
				.then((res)=>{
					console.log(res)
					if(res.data == "登录成功"){
						this.$router.history.push("/");
						this.$store.dispatch("setUserNameA",username);
					}
				})
			},
			page(){
				this.$router.history.push("/")
			},
			getGood(){
				var username = this.$store.state.username;
//				console.log(username)
				axios.get(`/good/getGood/?username=${username}`)
				.then((res)=>{
//					console.log(res)
					if(res.data == false){
						this.flag = true
					}else{
						this.flag=false;
						this.data = res.data	
						var that = this
						this.$nextTick(function(){
							$(".but").click(function(){
								var img = $(this).parents("li").find("dt img").attr("src")
								$(this).parents("li").remove()
								axios.get(`/good/delGood/?username=${username}&img=${img}`)
								.then(function(res){
//									console.log(res)
									that.sums()
								
								})
							})
							
							$(".pre").click(function(){
								var img = $(this).parents("li").find("dt img").attr("src")
								var html = parseInt($(this).siblings("b").html());
								html--;
								if(html<=0){
									html = 1
								}
								$(this).siblings("b").html(html);
								axios.get(`/good/update/?username=${username}&img=${img}&num=${html}`)
								.then(function(res){
//									console.log(res)
									that.sums();
								})
							})
							$(".next").click(function(){
								var img = $(this).parents("li").find("dt img").attr("src")
								var html = parseInt($(this).siblings("b").html());
								html++;
								$(this).siblings("b").html(html)
								axios.get(`/good/update/?username=${username}&img=${img}&num=${html}`)
								.then(function(res){
//									console.log(res)
									that.sums()
								})
							})
							
						})
					}
				})
				
			},
			
			sums(){
				var sum = 0
				var len = $(".ul .b span").length;
				var nums = 0;
//				console.log("len"+len)
				for(var i = 0;i < len;i ++){
					sum+=$(".ul .b span").eq(i).html()*$(".ul .b b").eq(i).html()
					nums+=parseInt($(".ul .b b").eq(i).html())
				}
				this.sum = sum
//				console.log("sum"+this.sum)

				this.$store.dispatch("addToCartA",nums);
				console.log(this.$store.state.nums)
			}
			
		
			
		}
	}
</script>

<style scoped>
	.login{
		width: 100%;
		height: 100%;
		font-size: 0.14rem;
		display: flex;
		flex-direction: column;
	}

	.form{
		width: 100%;
		padding: 0.1rem 0.02rem 0 0.02rem;
		flex: 1;
		overflow-y: auto;
	}
	.input-group{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #e2e2e2;
		display: flex;
		background: #FFF;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.form span{
		width: 0.7rem;
		height: 100%;
		padding: 0.1rem 0.12rem;
		line-height: 0.28rem;
	}
	.input-group input{
		border: 0;
		flex:1;
	}
	.form button{
		width: 100%;
		margin-top: 10px;
		background: #980000;
		color: #FFF;
		font-size: 0.2rem;
		height: 0.4rem;
		border: 0;
		border-radius: 0.05rem;
	}
	.bot{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.bot a{
		color: #000;
		text-decoration: none;
	}
	.cart{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.content{
		flex: 1;
		align-items: center;
	}
	.top{
		height: 0.4rem;
		line-height: 0.4rem;
		text-align: center;
		width: 100%;
		background: #FFF;
		font-size: 0.3rem;
	}
	.ul{
		flex: 1;
		width: 100%;
		
		background: #fff;
		display: flex;
		flex-direction: column;
	}
	.ul ul{
		width: 100%;
		height: 1.41rem;
		overflow-y: auto;
		flex: 1;
	}
	.sum{
		width: 100%;
		height: 0.5rem;
		background: #ccc;
		border-top: 1px solid #000;
		display: flex;
		justify-content: space-around;
	}
	.heji{
		width: 50%;
		height: 100%;
		display: flex;
	}
	.heji span{
		font-size: 0.16rem;
		line-height: 0.5rem;
	}
	.ul li{
		width: 100%;
		height: 1.1rem;
		padding: 0.1rem;
		margin-bottom: 0.1rem;
		background: #EEEEEE;
		margin-bottom: 5px;
	}
	.ul p{
		width: 100%;
		border-bottom: 1px solid #d8d8d8;
		margin-left: 10px;
		height: 0.3rem;
		font-size: 0.12rem;
		line-height: 0.3rem;
	}
	dl{
		width: 100%;
		height: 100%;
		display: flex;
	}
	dt{
		width: 0.9rem;
		height: 100%;
	}
	dd{
		flex: 1;
		padding-left: 0.1rem;
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
	}
	dd .b,dd h4{
		width: 100%;
	}
	dd .b{
		display: flex;
		justify-content: space-around;
	}
	.b a{
		width: 0.22rem;
		height: 0.22rem;
		border-radius: 50%;
		border: 1px solid #333;
		text-align: center;
		line-height: 20px;
	}
	.b b{
		width: 0.4rem;
		height: 0.22rem;
		text-align: center;
	}
	.b span{
		color: #CC0000;
	}
	.sum input{
		width: 120px;
		background: #ff8000;
		text-align: center;
		line-height: 0.5rem;
		color: #fff;
		border: 0;
	}
	.sum h1{
		color: #FF0000;
	}
</style>