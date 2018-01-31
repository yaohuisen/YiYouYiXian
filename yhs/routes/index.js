var express = require('express');
var router = express.Router();

var GoodModel = require("../model/Goods")
var UserModel = require("../model/Users")
var CartModel = require("../model/Cart")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/good/goods', function(req, res, next) {
	var id = req.query.id
  GoodModel.find({id:id},function(err,data){
  	res.json(data)
  })
});
router.get('/good/getGood', function(req, res, next) {
		var username = req.query.username;
		console.log(username);
		CartModel.find({goodUser:username},function(err,data){
			if(data.length == 0){
				res.send(false)
			}else{
				res.json(data)
			}
		})
});

router.get('/good/update', function(req, res, next) {
  var num = parseInt(req.query.num);
  console.log(num)
  var username = req.query.username;
  var img = req.query.img;
  CartModel.update({goodUser:username,goodImg:img},{$set:{goodNum:num}},function(err){
  	if(!err){
  		res.send("更新成功")
  	}
  })
});

router.get('/good/delGood', function(req, res, next) {
  	var username = req.query.username;
  	var img = req.query.img;
  	CartModel.remove({goodUser:username,goodImg:img},function(err){
  		if(!err){
  			res.send("删除成功")
  		}
  	})
});
router.get('/good/getNum', function(req, res, next) {
	var username = req.query.username;
	var id = req.query.id;
  CartModel.find({goodUser:username,goodId:id},function(err,data){
  	if(data.length == 1){
  		res.json(data)
  	}else{
  		res.send("No")
  	}
  })
});
router.post('/good/addToCart', function(req, res, next) {
		var goodUser = req.body.username;
		var goodHasNum = req.body.hasNum;
		var goodId = req.body.id;
		var goodImg = req.body.img;
		var goodInfo = req.body.Info;
		var goodPrice = req.body.price;
		var goodNum = req.body.num;
		
		if(goodHasNum!="No"){
			goodNum = parseInt(goodHasNum)+ parseInt(goodNum);
			CartModel.update({goodUser:goodUser,goodId:goodId},{$set:{goodNum:goodNum}},function(err){
				if(!err){
					res.send("ok123")
				}
			})
		}else{
			var cm = new CartModel();
			cm.goodUser = goodUser;
			cm.goodId = goodId;
			cm.goodImg = goodImg
			cm.goodInfo = goodInfo;
			cm.goodPrice = goodPrice;
			cm.goodNum = goodNum;
			cm.save(function(err){
				if(!err){
					res.send("ok")
				}
			})
		}
		
});

router.get('/good/login', function(req, res, next) {
	var username = req.query.username;
	var psw = req.query.psw;
  UserModel.find({username:username,psw:psw},function(err,data){
  	 if(data.length>=1){
  	 		res.send("登录成功")
  	 }else{
  	 	 res.send("用户名或密码输入错误，请重新输入！！！")
  	 }
  })
});
router.get('/good/users', function(req, res, next) {
	var username = req.query.username;
	var psw = req.query.psw;
	UserModel.find({username:username},function(err,data){
		if(data.length>0){
			res.send("用户名已被注册请重新注册！！！")
		}else{
			var un = new UserModel();
		  un.username = username;
		  un.psw = psw;
		  un.save(function(err){
		  	if(!err){
		  		res.send("注册成功");
		  	}
		  })
		}
	})
  
});
module.exports = router;
