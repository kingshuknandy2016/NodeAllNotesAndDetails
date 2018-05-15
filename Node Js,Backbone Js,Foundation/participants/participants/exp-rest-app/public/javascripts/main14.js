

var AuthorView = Backbone.View.extend({

  render:function(){
      this.$el.html("AUTHORS VIEW");
      return this;
  }
});

var BookView = Backbone.View.extend({

  render:function(){
      this.$el.html("BOOK VIEW");
      return this;
  }
});

var ReviewsView = Backbone.View.extend({

  render:function(){
      this.$el.html("REVIEWS VIEW");
      return this;
  }
});


var AppRouter=Backbone.Router.extend({
    routes:{
        "author":"authorRoute",
        "book":"bookRoute",
        "reviews":"reviewsRoute",
        "*other":"defaultRoute"
    },


    authorRoute:function(){
    var view=new AuthorView({el:"#container"})
    view.render();
    },

    bookRoute:function(){
    var view=new BookView({el:"#container"})
    view.render();
    },

    reviewsRoute:function(){
    var view=new ReviewsView({el:"#container"})
    view.render();
    },

    defaultRoute:function(){
    // var view=new AuthorView({el:"#container"})
    // view.render();
    }

});


var router=new AppRouter();
Backbone.history.start();


var NavView=Backbone.View.extend({
    events:{
        "click":"onClick"
    },


  onClick:function(e){
      var $li=$(e.target);
      router.navigate($li.attr("data-url"),{trigger:true})
  }
});

var navView=new NavView({el:"#nav"});

