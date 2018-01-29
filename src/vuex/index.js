import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex)
var state = {
	
}
var mutations = {
	setUserName : function(state,username){
		state.username = username;
	},
	addToCart : function(state,goods_info){
		state.cart.push(goods_info)
	}
}
var actions = {
	setUserNameA:function({commit},username){
		commit("setUserName",username)
	},
	addToCartA : function({commit},goods_info){
		commit("addToCart",goods_info);
	}
}
export default new Vuex.Store({
	state,
	mutations,
	actions
})

