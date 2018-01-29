<template>
	<div class="main" >
		<div class="header">
			<div class="inps" @click="changeFlag()">
				<div class="inp1" v-if="flag" >
					<i class="iconfont">&#xe633;</i>
					<span>搜索</span>
				</div>
				<div class="inp2" v-if="!flag">
					<i class="iconfont">&#xe633;</i>
					<input class="blur" @blur="changeFlagA()"  type="text"  placeholder="搜索"/>
					<button type="button">搜索</button>
				</div>
			</div>
			<banner></banner>
			<list></list>
		</div>
		
		<div class="foot">
			<ul>
				<li>
					<i class="iconfont">&#xe636;</i>
					<p>首页</p>	
				</li>
				<li>
					<i class="iconfont">&#xe506;</i>
					<p>县优资讯</p>	
				</li>
				<li>
					<i class="iconfont">&#xf01d2;</i>
					<p>购物车</p>	
				</li>
				<li>
					<i class="iconfont">&#xe606;</i>
					<p>吃货中心</p>	
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import banner from "./banner";
	import list from "./list";
	export default {
		name : "main",
		data(){
			return {
				flag:true
			}
		},
		components:{
			banner,
			list
		},
		methods:{
			changeFlag(){
				this.flag = false
			},
			changeFlagA(){
				if(document.getElementsByClassName("blur")[0].value == ''){		
					this.flag = true
				}
			}	
			
		}
	}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";
	.main{
		width: 100%;
		height: 100%;
		display: flex;
		font-size: 0.14rem;
		flex-direction: column;
	}
	.foot{
		width: 100%;
		height: 0.5rem;
		
	}
	.foot ul{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		
		padding-top: 10px;
	}
	.foot li{
		list-style: none;
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		
		align-content: space-around;
	}
	.foot i{
		width: 100%;
		text-align: center;
		font-size: 0.2rem;
	}
	.foot li:nth-child(1) p{
		color: #980000;
	}
	.foot li:nth-child(1) i{
		color: #f09c4a;
	}
	.foot p{
		width: 100%;
		text-align: center;
		font-size: 0.12rem;
	}
	.header{
		width: 100%;
		flex: 1;
	
		overflow-y: auto;
	}
	.inps{
		width: 100%;
		height: 0.28rem;
		position: absolute;
		top: 0.1rem;
		z-index: 999;
		
	}
	.inp1{
		width: 95%;
		margin: 0 auto;
		border: 1px solid #e6e6ea;
		height: 100%;
		text-align: center;
		line-height:0.28rem ;
		color: #9b9b9b;
		border-radius: 5px;
		background: #fff;
	}
	.inp2{
		width: 95%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		height: 100%;
		position: relative;
		
	}
	.inp2 input{
		width: 85%;
		height: 100%;
		border: 1px solid #e6e6ea;
		padding-left: 0.2rem;
		background: #fff;
	}
	.inp2 i{
		display: inline-block;
		height: 100%;
		line-height: 32px;
		position: absolute;
		left: 5px;
	}
	.inp2 button{
		width: 13%;
		height: 100%;
		text-align: center;
		border: 0;
		color: #333;
		background: #cc0000;
		border-radius: 5px;
	}
	.inp1 span{
		margin-left: 5px;
	}
</style>