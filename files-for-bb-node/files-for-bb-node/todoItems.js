
var TodoItems = Backbone.Collection.extend({
	model: TodoItem,

	url: "/todos"
});