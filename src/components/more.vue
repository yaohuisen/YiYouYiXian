<template>
<div class="more">
	<div class="loading" v-if="flag">
		玩命加载中。。。。。。
	</div>
	<div class="banner">
		<img :src="data.image"/>
	</div>
	<div class="product">
		<ul>
			<li v-for="item in data.products">
				<dl>
					<dt><img :src="item.image"/></dt>
					<dd>
						<p>{{item.name}}</p>
						<span>￥{{item.price}}</span>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
	<div class="infor">版权优艾迪所有</div>
</div>
</template>

<script>
import axios from "axios";
import { Popup } from 'mint-ui';
export default {
	name : "more",
	data(){
		return {
			data:[],
			flag:true
		}
	},
	mounted(){
		this.getData()
	},
	methods:{
		getData:function(){
			var that = this;
			var id = this.$route.params.fid;
		
			axios.get(`/wx/special/getSpecialById?id=${id}`)
			.then((res)=>{
				console.log(res)
				this.data = res.data.special;
				this.$nextTick(function(){
					that.flag = false
				})
			})
		}
	}
}
</script>

<style scoped>
	.more{
		font-size: 0.14rem;
		width: 100%;
		height: 100%;
	}
	.loading{
		width: 100%;
		height: 100%;
		text-align: center;
		background: #333;
		opacity: 0.3;
		color: red;
	}
	.banner{
		width:100%;
		height: 1.8rem;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.product{
		width: 100%;
		padding: 0 10px 10px 10px;
	}
	li{
		width: 3rem;
		height: 1.35rem;
		margin-top: 0.1rem;
		background: #fff;
	}
	dl{
		width: 100%;
		height: 100%;
		display: flex;
	}
	dt{
		width:100px;
		height: 100%; 
	}
	dt img{
		width: 100px;
		height: 100px;
	}
	dd{
		width: 190px;
		height: 100%;
		margin-left: 0.1rem;
		position: relative;
	}
	span{
		display: block;
		margin-top: 0.15rem;
		color: #CC0000;
		position: absolute;
		bottom: 0.05rem;
		left: 0;
	}
	.infor{
		width: 100%;
		text-align: center;
		color: #ccc;
	}
</style>