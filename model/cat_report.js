var connection = require("../config/connection");
module.exports.insert=function(obj,cb){
  connection.init(function(err,client){
    var db = client.db('mgnrega');
db.collection("cat").insert(obj,cb)
});
}
module.exports.find=function(cb){
	connection.init(function(err, client){
		var db = client.db('mgnrega');
		db.collection("cat").find().toArray(cb);
	});
}
module.exports.findWhere=function(obj, cb){
	connection.init(function(err, client){
		var db = client.db('mgnrega');
		db.collection('cat').find(obj).toArray(cb);
	});
}
module.exports.update=function(where,obj,cb){
	connection.init(function(err,client){
		var db=client.db('mgnrega');
  db.collection("cat").updateOne(where,{$set:obj},cb)
});
}
module.exports.delete=function(obj,cb){
	connection.init(function(err,client){
		var db=client.db('mgnrega');
		db.collection("cat").deleteOne(obj,cb)
	})
}
