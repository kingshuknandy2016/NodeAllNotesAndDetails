// var Book =Backbone.Model.extend ({

//  initialize:function(){
//      console.log("a new book has been created.....");
//  },

//  defaults:{
//         title:"Default Title",
//         author:"Unknown"
  
// },

// });

// var BookView=Backbone.View.extend({
//         tagname:"li",
//         render:function(){
//         this.$el.html(this.model.get("title"));
//         this.$el.html("id",this.model.id);
//         return this;
//   }

// });

// var Library  = Backbone.Collection.extend({
// model:Book,

// });

// var Libraryview = Backbone.View.extend({

//  tagname:"li",
// initialize:function(){
//     console.log("library view initialized.....");
//     this.model.on("add", this.onBookAdded, this);
//     this.model.on("remove", this.onBookRemoved, this);
// },
  
//   onBookAdded : function(){
//       console.log("book was added....");
//       var bookView = new BookView({model : book});
//       this.el.append(bookView.render().$el)
//   },

//  onBookRemoved:function(){
//       console.log("book will be removed....");
      
//       this.$("li#"+book.id).remove();
//   },
//   render: function(){
//       var self=this;
//       this.model.each(function(book){
//            var bookView = new BookView({model : book});
//             self.el.append(bookView.render().$el)
//       });
//       return self;
//   }

// });


// var lib1=new Library([
//     new Book({id:1,title:"fifth discpline"}),
//      new Book({id:2,title:"start with "}),
//       new Book({id:3,title:"test book"})
// ]);

// var lv=new Libraryview ({el: "#book-list",model : lib1});
// lv.render();



// console.log("will get new numbers in 2 sec..");
// setTimeout(function(){
//    lib1.add( new Book({id:4,title:"test book 2"}))
// },2000);

// console.log("will remove a book in 2 sec..");
// setTimeout(function(){
//    lib1.remove(lib1.at(0))
// },6000);


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
   
   render:function(){
       this.$el.html(this.model.get("title"));
       this.$el.attr("id", this.model.id);
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





