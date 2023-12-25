
var mongoose=require("mongoose");
var dbURI='mongodb+srv://ozandogan:WjPy8DgSelLLCKHL@cluster0.n6p5ovr.mongodb.net/';
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log("Mongoose  "+ dbURI +"adresindeki veritabanına bağlandı ")
});
mongoose.connection.on("error",function(err){
    console.log("bağlantı sağlanmadı " +err)
});
mongoose.connection.on("disconnected",function(){
    console.log("bağlantı kesildi ")
});
process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("bağlantı kapatıldı");
    process.exit(0);
});
require("./venue");
