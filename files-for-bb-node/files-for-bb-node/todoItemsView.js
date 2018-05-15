
var TodoItemsView = Backbone.View.extend({
	id: "todoItemsContainer",
	
	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");
	},

	events: {
		"keypress #newTodoItem": "onKeyPress"
	},

	onKeyPress: function(e){
		if (e.keyCode == 13){
			var $textBox = this.$("#newTodoItem");

			if ($textBox.val()){
				var todoItem = new TodoItem({ title: $textBox.val() });
				this.model.create(todoItem);

				$textBox.val("");
			}	
		}
	},

	render: function(){
		var template = $("#todoListTemplate").html();
		var html = Mustache.render(template);
		this.$el.html(html);

		return this;
	}
});