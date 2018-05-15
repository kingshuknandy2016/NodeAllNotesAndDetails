var express = require('express');
var router = express.Router();

var tasks = [
	{"id":1, "title": "Bootstrap models and collections exercise", "completed": true, "isCompleted": true},
	{"id":2, "title": "NodeJS and Express Install", "completed":false, "isCompleted": false },
	{"id":3, "title": "MongoDB installation and configuration", "completed": true, "isCompleted": true},
	{"id":4, "title": "Build automation using Gulp ", "completed": false, "isCompleted": false}
]

//Get a task by it's ID
function findTask(id){
	for (var i = 0; i < tasks.length; i++){
		if (tasks[i].id === id){
			return {"task":tasks[i],"index":i};
		}
	}
	return null;
}

//Remove a task by it's ID
function removeTask(id){
	for (var i =0; i < tasks.length; i++){
		if (tasks[i].id == id){
			tasks.splice(i,1);
			break;
		}
	}
}

/* GET tasks list */
router.get('/', function(req, res, next) {
    res.send(tasks);
});

router.post('/', function(req, res, next) {
	var task = req.body;
	lastId = tasks[tasks.length - 1].id;
	task.id = lastId + 1;
	tasks.push(task);
	console.log('Saving task with the following structure ' + JSON.stringify(task));
	res.send(task);
});

router.put("/:id", function(req,res){
	var task = req.body;
	console.log("Updating task " + JSON.stringify(task));
	var currenttask = findTask(task.id);
	if (currenttask === null){
		console.log('Could not find task ' + currenttask);
		res.sendStatus(404);
		//res.json({})
	} else {
		tasks[currenttask.index] = task;
		res.send(task);
	}
});

router.delete("/:id",function(req,res){
	console.log("Deleting task with id " + req.params.id);
	var task = findTask(parseInt(req.params.id,10));
	if (task === null){
		console.log('Could not find task with ID ' + req.params.id);
		res.sendStatus(404);
	} else {
		console.log("Deleting " + req.params.id);
		removeTask(parseInt(req.params.id,10));
		//res.send(task);
		res.json({})
		//res.sendStatus(200);
	}
});

module.exports = router;
