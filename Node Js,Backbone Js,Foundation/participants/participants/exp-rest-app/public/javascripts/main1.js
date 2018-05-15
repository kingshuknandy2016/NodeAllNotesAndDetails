var Book = Backbone.Model.extend({
    initialize:function(){
        console.log("A new book has been crated");
    },

    defaults :{
        title:"Default Title",
        author:"Unknown"
    },

    validate:function(attrs){
        if(attrs.title ===""){
            return "you must enter a book name"
        }
        if(attrs.author ===""){
            return "you must enter a author name"
        }

        if(!attrs.years){
            return "you must enter a publishing year"
        }
        
        if(attrs.years > 2018){
            return "year value is incorrect"
        }
    }
});

// var book1=new Book();
// book1.set("title","World is flat");
// book1.set({"author":"Glen Maxwell","year":2016});

// console.log("after sending attributes",book1.toJSON());

// console.log("After setting attributes:",book1.toJSON());
// console.log("Is book1 valid:",book1.isValid());
// console.log("Title:",book1.get("title"));
// book1.unset ("title");
// console.log(book1.has("title"));
// book1.clear();
// console.log("After Clear:",book1);
// console.log("After Clear:",book1.toJSON());

 var book2=new Book();
 console.log("New Book2:",book2.toJSON);
 console.log("Is book2 valid:",book2.isValid());
  console.log("Validation Error",book2.validationError);
   //console.log("",);

