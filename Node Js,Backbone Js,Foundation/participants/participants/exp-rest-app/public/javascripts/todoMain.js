
$(document).ready(function(){

	//Collection
	var todoItems = new TodoItems();
	todoItems.fetch();

	var todoItemsView = new TodoItemsView({ model: todoItems });
	$("body").append(todoItemsView.render().$el);
});




