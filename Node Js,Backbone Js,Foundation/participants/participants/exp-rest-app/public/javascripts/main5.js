var BookView=Backbone.View.extend({

    tagName:"span",
    className:"book",
    id:"12345",
    render: function(){
        this.$el.html("<h2>Hello world from  Backbone..</h2><p>");
        return this;
    }
});

// var bv=new BookView({el:"#hw"});
// bv.render();

// var bv=new BookView();
//  bv.render();
//  $("#hw").html(bv.$el);

var bv=new BookView();
$("#hw").html(bv.render().$el);
