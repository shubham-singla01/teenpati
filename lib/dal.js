var config = require('./../config');
var databaseUrl;
var mongodbs= require("mongojs");
// var config = JSON.parse(process.env.APP_CONFIG);
if (config.database.mode==='local'){
	databaseUrl ="local"; 
} else {
	databaseUrl = "mongodb://" + config.database.username + ":"+  config.database.password +"@" + config.database.host + ":" + config.database.port + "/" + config.database.dbname;
	/*"mongodb://" + config.mongo.user + ":nopassword@" + config.mongo.host + ":" + config.mongo.port + "/" + config.mongo.db;*/ // "username:password@example.com/mydb"
}
var collections = ["users", "tables","sessions"];
var db = mongodbs(databaseUrl);



var DAL={db:db};


module.exports = DAL;