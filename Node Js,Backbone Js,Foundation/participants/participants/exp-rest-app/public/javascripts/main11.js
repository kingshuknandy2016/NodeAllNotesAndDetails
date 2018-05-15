var Book =Backbone.Model.extend ({

 initialize:function(){
     console.log("a new book has been created.....");
 },

 defaults:{
  title: "Test",
  author:"Neetu"
  
},

});
//collection events
var Library  = Backbone.Collection.extend({
model:Book,

});

var Bookview = Backbone.View.extend({
  tagName:"li",


    events:{
        "click":"onClick",
        "click .delete-action":"onButtonClick"
    },

    onClick: function(){
        console.log("Book was clicked");
    },

    onButtonClick: function(e){
        e.stopPropagation();
        console.log("Button  was clicked");
    },


   
//    render:function(){
//        this.$el.html(this.model.get("title"));
//        this.$el.attr("id", this.model.id);
//        return this;
//    }

   render:function(){
       //this.$el.html(this.model.get("title"));
       this.$el.attr("id", this.model.id);
       var template=$("#book-template").html();
       var html=Mustache.render(template,this.model.toJSON());
       this.$el.html(html);
       return this;
   }

});

var Libraryview = Backbone.View.extend({
  tagName:"ul",

initialize:function(){
    console.log("library view initialized");
    this.model.on("add",this.onBookAdded, this);
    this.model.on("remove",this.onBookRemoved, this);
  
},
 onBookAdded: function(book){
   console.log("book was added....");
   var bookview = new Bookview({model: book});
   this.$el.append(bookview.render().$el);
 },

  onBookRemoved: function(book){
   console.log("book will be removed....");
   
   this.$("li#" + book.id).remove();
 },

  render:function(){
      var self = this;
      this.model.each(function(book){
          var bookview = new Bookview({model:book });
          self.$el.append(bookview.render().$el);
      });
      return self;
  }
});

var lib1 = new Library([
  new Book({id:1, title: "fifth descipline"}),
   new Book({id:2, title: " Start with why"}),
    new Book({id:3, title: "calvin and hobbs"}),
]);



var lv=new Libraryview ({el: "#book-list",model : lib1});
lv.render();

console.log("will add a new book in 2 sec..");
setTimeout(function(){
    lib1.add(new Book({id:4, title:"jquery in action"}))
},3000);

console.log("will remove a book  in 2 sec..");
setTimeout(function(){
    lib1.remove(lib1.at(0));
},6000);