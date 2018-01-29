<template>
	<div class="regist">
		<p><span>用&nbsp;户&nbsp;&nbsp;名</span><input type="text" placeholder="请输入用户名" id="username"/></p>
		<p><span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</span><input type="password" placeholder="请输入密码" id="psw"/></p>
		<p><span>确认密码</span><input type="password" placeholder="请确认密码" id="psw1"/></p>
		<p><span>手机号码</span><input type="number" placeholder="手机号" id="phone"/></p>
		<p><span>验&nbsp;证&nbsp;&nbsp;码</span><input type="password" placeholder="验证码" id="code"/><a href="javascript:;">&nbsp;&nbsp;免费获取验证码&nbsp;&nbsp;</a></p>
		<button id="bt" onclick="regist()">注册</button>

	</div>
</template>

<script>
	export default {
		name :"Regist",
		data () {
			return {
				
			}
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	.regist{width: 100%;height: 100%;background: #FFFFFF;overflow: hidden;}
	.regist p{
		width: 100%;height: 0.42rem;margin-bottom: 1px;color: #333333;line-height: 0.5rem;
	}
	.regist p span{
		display: inline-block;height:0.42rem;width: 0.66rem;text-align: right;margin-right: 0.1rem;
	}
	input{
		border: none;
	}
	.regist p:nth-child(5) a{
		display: inline-block;background: #ff6309;color: #FFFFFF;border-radius: 0.05rem;height: 0.32rem;line-height: 0.32rem;
	}
	#bt{
		width: 97%;height: 0.5rem;background: #ff0000;border: none;color: #ffffff;text-align: center;line-height: 0.5rem;
		margin-left: 0.05rem;border-radius: 0.05rem;margin-top: 0.05rem;margin-bottom: 0.05rem;
	}
</style>