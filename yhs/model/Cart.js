var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Cart = new Schema({
	goodUser:String,
	goodId : String,
	goodImg : String,
	goodNum:Number,
	goodInfo:String,
	goodPrice:String,
	create_date : {type : Date,default : Date.now}
})
var CartModel = mongoose.model("carts",Cart);
module.exports = CartModel;