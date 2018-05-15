
var TodoItemView = Backbone.View.extend({
	tagName: "li",
	
	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");

	},

	render: function(){
		this.$el.attr("id", this.model.id);
		//console.log("Task:" + JSON.stringify(this.model));
		
		this.$el.toggleClass("completed", this.model.get("completed"));

		var template = $("#todoItemTemplate").html();
		var html = Mustache.render(template, this.model.toJSON());
		this.$el.html(html);

		return this;
	}
});