var Book = Backbone.Model.extend({

   
    initialize:function(){
        console.log("A new book has been crated");
    },

    defaults :{
        title:"Default Title",
        author:"Unknown"
    },


});


var BookView=Backbone.View.extend({

    tagName:"span",
    className:"book",
    id:"12345",
    render: function(){
        //this.$el.html("<h2>Hello world from  Backbone..</h2><p>");
        this.$el.html(this.model.get("title"));
        return this;
    }
});


var book=new  Book({"id":1,title:"fifth discpline",author:"test author"});
var bv=new BookView({model:book});
$("#hw").html(bv.render().$el);