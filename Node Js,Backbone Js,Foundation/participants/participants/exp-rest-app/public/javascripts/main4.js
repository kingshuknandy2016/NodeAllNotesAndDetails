var Book = Backbone.Model.extend({

   
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
     url:"/books",

    initialize:function(){
        console.log("library was crated");
    }
});


var lib1=new Library();
lib1.fetch({

    success: function(){
        console.log(JSON.stringify(lib1));
    },
    error:function(){
        console.log("error fetching the books..........");
    }
});


