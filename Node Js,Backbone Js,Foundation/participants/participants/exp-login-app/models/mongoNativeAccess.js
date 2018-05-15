var MongoClient=require('mongodb').MongoClient;
var assert=require('assert');


//connection url
var url='mongodb://localhost:27017/node-users';
MongoClient.connect(url,function(err,db){
    assert.equal(null,err);
    console.log("Connect successfully to server");

    //add the function that yoy want to run
    findUsers(db,function(){
        db.close();
    });
});



var findUsers=function(db,callback){
//Get the documents collection
var collection=db.collection('users');
collection.find().toArray(function(err,docs){
    assert.equal(err,null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
});

//find Some documents
};