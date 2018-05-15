var Book =Backbone.Model.extend ({

 initialize:function(){
     console.log("a new book has been created.....");
 },

 defaults:{
        title:"Default Title",
        author:"Unknown"
  
},

});

var Library  = Backbone.Collection.extend({
model:Book,

});

var Libraryview = Backbone.View.extend({

initialize:function(){
    console.log("library view initialized");
    this.model.on("change", this.render, this)
},
  render:function(){
      this.$el.html(this.model.get("title")+ "has been purchased"+this.model.get("nosold"));
      return this;
  }
});

var book = new Book({ title:"fifth Discipline", nosold:5678});
var lv=new Libraryview ({el: "#hw",model : book});
lv.render();

console.log("will get new numbers in 2 sec..");
setTimeout(function(){
    book.set({"nosold": 6000});
},2000);