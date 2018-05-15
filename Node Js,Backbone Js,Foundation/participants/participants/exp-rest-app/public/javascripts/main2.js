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

var book1=new Book({id:1});

book1.fetch({

    success: function(){
        console.log(book1.toJSON());
    },
    error:function(){
        console.log("error fetching the book");
    }

});

var book2=new Book();
book2.save({"year":2016,"name":"Toy"},{
    success: function(){
        console.log(book2.toJSON());
    },
    error:function(){
        console.log("Error in saving the book");
    }
});

book2.set("title","Backbane JS Advanced");
//book2.set("name","Story of My Life");
book2.save({id:3},{
    success: function(){
        console.log(book2.toJSON());
    },
    error:function(){
        console.log("Error in saving the book");
    }
});


book2.destroy({
    success: function(){
        console.log("Books Was successfully deleted");
    },
    error:function(){
        console.log("Error in deleting the back");
    }
});



