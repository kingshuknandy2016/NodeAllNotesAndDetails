var Book = Backbone.Model.extend({
    idAttribute:"id",
    urlRoot:"/books",
   
    initialize:function(){
        console.log("A new book has been crated");
    },

    defaults :{
        title:"Default Title",
        author:"Unknown"
    },


});

var Library=Backbone.Collection.extend({
    model:Book,

    initialize:function(){
        console.log("library was crated");
    }
});


var lib=new Library([
    new Book({id:1,topic:"js",nosold:500}),
    new Book({id:2,topic:"js",nosold:323}),
    new Book({id:3,topic:"js",nosold:27}),
    new Book({id:4,topic:"node",nosold:72}),
    new Book({id:5,topic:"js",nosold:644}),

]);

// lib.add(new Book({id:10}));
// console.log(lib.toJSON());
// console.log("Library has "+lib.length+" books. ");

// lib.push(new Book({id:11}));
// console.log(lib.toJSON());
// console.log("Library has "+lib.length+" books. ");

// lib.add(new Book({id:12},{at:0}));
// console.log(lib.toJSON());
// console.log("Library has "+lib.length+" books. ");

// lib.unshift(new Book({id:13}));
// console.log(lib.toJSON());
// console.log("Library has "+lib.length+" books. ");

// console.log(lib.at(2));
// console.log(lib.get("c2"));

// lib.remove(lib.get("c2"));
// console.log(lib.toJSON());
// console.log("Library has "+lib.length+" books. ");

var jsBooks1=lib.where({topic:"js"});
var jsBooks2=lib.findWhere({topic:"js"});
console.log("Books about JS  ...using where",JSON.stringify(jsBooks1));
console.log("Books about JS  ...using findWhere",JSON.stringify(jsBooks2));


var topsellers=lib.filter(function(book){
    return book.get("nosold")>250

});

console.log("top Selling books",JSON.stringify(topsellers));


