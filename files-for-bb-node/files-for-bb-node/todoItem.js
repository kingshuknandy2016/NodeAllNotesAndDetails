
var TodoItem = Backbone.Model.extend({
	defaults: {
		isCompleted: false
	},

	urlRoot: "/todos",
	
	validate: function(attrs){
		if (!attrs.title)
			return "Title is required.";
	}
	
});
