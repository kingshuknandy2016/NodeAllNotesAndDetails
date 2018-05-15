var fs=require("fs");
var path= require("path");

//Asynchronous  filter---higher order function

var filterListInSync= function(dir,filterstr,callback){
//synchronous solution
console.log();
        fs.readdir(dir,function(err,list){
                if(err){
                    return callback(err);
                }

                list =list.filter(function (file){
                    return path.extname(file) === "."+filterstr
                });
                callback(null,list);
        })

};


var dir=process.argv[2];
var filterstr=process.argv[3];
function fileFilterCallback(err,list){
    if(err){
        return console.log("Error occured:", err);
    }
     var noOfFiles=0;
    list.forEach(function(file){
        noOfFiles ++;
    });
    console.log("Total no of files" + noOfFiles);
}
console.log("starting............");
filterListInSync(dir,filterstr,fileFilterCallback)
console.log("ending................");