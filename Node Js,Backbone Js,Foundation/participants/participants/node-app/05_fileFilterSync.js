var fs=require("fs");
var path= require("path");

//sync filter---higher order function

var filterListInSync= function(dir,filterstr,callback){
//synchronous solution
console.log();
var dirList=fs.readdirSync(dir);
var returnList=[];
var currFile;

        for(i=0;i<dirList.length;i++){
        currFile=dirList[i];
            if(path.extname(currFile) === "."+filterstr){
            returnList.push(currFile);
        }
        }
callback(null,returnList);
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
