import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex)
var state = {
	username : '',
	nums:""
}
if(localStorage.getItem("data")){
	var data = JSON.parse(localStorage.getItem("data"));
	state = data
}
function saveTolocal(state){
	localStorage.setItem("data",JSON.stringify(state));
}
var mutations = {
	setUserName : function(state,username){
		state.username = username;
		saveTolocal(state)
	},
	addToCart : function(state,nums){
		state.nums = nums;
		saveTolocal(state)
	}
}
var actions = {
	setUserNameA:function({commit},username){
		commit("setUserName",username)
		saveTolocal(state)
	},
	addToCartA : function({commit},nums){
		commit("addToCart",nums);
		saveTolocal(state)
	}
}
export default new Vuex.Store({
	state,
	mutations,
	actions
})

