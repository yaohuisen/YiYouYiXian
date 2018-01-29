<template>
	<div class="login">
		<p><span>用户名</span><input type="text" placeholder="请输入用户名" id="username"/></p>
		<p><span>密    码</span><input type="password" placeholder="请输入密码" id="psw"/></p>
		<button id="btn" onclick="login()">登录</button>
		<div class="login-1">
			<a href="javascript:;">忘记密码?</a>
			<a href="javascript:;">立即注册</a>
		</div>
	</div>
</template>

<script>
	export default {
		name :"Login",
		data () {
			return {
				
			}
		}
	}
</script>

<style scoped>
	.login{width: 100%;height: 100%;background: #eeeeee;overflow: hidden;}
	.login p{
		width: 100%;height: 0.5rem;background: #FFFFFF;margin-bottom: 1px;color: #666666;
	}
	.login p span{
		display: inline-block;height:0.5rem;width: 0.31rem;
	}
	.login p:nth-child(1){
		line-height: 0.5rem;padding-left: 0.07rem;border-bottom: 1px solid #CCCCCC;margin-top: 0.05rem;
	}
	.login p:nth-child(2){
		line-height: 0.5rem;padding-left: 0.07rem;margin-top: 0.05rem;
	}
	 #username{
		border: none;height: 0.4rem;margin-left: 0.05rem;
	}
	 #psw{
		border: none;height: 0.5rem;margin-left: 0.05rem;
	}
	#btn{
		width: 97%;height: 0.5rem;background: #980000;border: none;color: #ffffff;text-align: center;line-height: 0.5rem;
		margin-left: 0.05rem;border-radius: 0.05rem;margin-top: 0.05rem;margin-bottom: 0.05rem;
	}
	.login-1{
		width: 100%;height: 100%;
	}
	.login-1>a:nth-child(1){
		display: inline-block;float: left;font-size: 16px;
	}
	.login-1>a:nth-child(2){
		display: inline-block;float: right;font-size: 16px;
	}
</style>