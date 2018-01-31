<template>
	<div class="regin">
		<div class="reg_form">
			<div class="input_group">
				<span>用&thinsp;&thinsp;户&thinsp;&thinsp;名</span>
				<input type="text" name="username" id="username" placeholder="输入手机号码/邮箱/账号" />
			</div>
			<div class="input_group">
				<span>密&ensp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&ensp;码</span>
				<input type="password" id="psw1" placeholder="密码" />
			</div>
			<div class="input_group">
				<span>确认密码</span>
				<input type="password" id="psw2" placeholder="确认密码" />
			</div>
			<div class="input_group">
				<span>手&thinsp;&thinsp;机&thinsp;&thinsp;号</span>
				<input type="password" id="psw2" placeholder="手机号" />
			</div>
			<div class="input_group">
				<span>验&thinsp;&thinsp;证&thinsp;&thinsp;码</span>
				<input type="password" id="psw2" placeholder="验证码" />
			</div>
			<button type="button" @click="submit()">注册</button>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import axios from "axios";
	import $ from "jquery";
	import foot from "./foot"
	export default {
		name :"regin",
		data () {
			return {
				
			}
		},
		components:{
			foot
		},
		mounted(){
			
		},
		methods:{
			submit(){
				var username = $("#username").val();
				var psw = $("#psw1").val();
				axios.get(`/good/users/?username=${username}&psw=${psw}`)
				.then((res)=>{
					if(res.data == "注册成功"){
						this.$router.history.push("/login")
					}
				})
			}
		}
	}
</script>

<style scoped>
	.regin{
		width: 100%;
		height: 100%;
		font-size: 0.14rem;
		background: #eee;
		display: flex;
		flex-direction: column;
	}
	.reg_form{
		width: 100%;
		background: #fff;
		height: 2.8rem;
		padding: 0.1rem;
		flex: 1;
	}
	.input_group{
		width: 100%;
		height: 0.42rem;
		display: flex;
	}
	span{
		width: 82px;
		height: 100%;
		padding: 0.1rem 0.12rem;
		line-height: 0.22rem;
	}
	input{
		border: 0;
		color: #999;
	}
	button{
		margin-top: 10px;
		background: #FF0000;
		width: 100%;
		height: 0.4rem;
		border: 0;
		border-radius: 0.05rem;
		color: #fff;
		font-size: 0.2rem;
	}
</style>