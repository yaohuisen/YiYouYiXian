var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Good = new Schema({
	create_date : {type : Date,default : Date.now}
})
var GoodModel = mongoose.model("uses",Good);
module.exports = GoodModel;

