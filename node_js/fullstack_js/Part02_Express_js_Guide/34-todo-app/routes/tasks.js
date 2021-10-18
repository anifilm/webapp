import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: String,
  createTime: { type: Date, default: Date.now  },
  completed: Boolean,
});

const Task = mongoose.model('task', taskSchema);

/*
 * GET users listing.
 */

const list = function (req, res, next) {
  Task.find(function (error, tasks) {
    if (error) return next(error);
    res.render('tasks', {
      title: 'Todo List',
      tasks: tasks || [],
    });
  });
};

const add = function (req, res, next) {
  if (!req.body || !req.body.name) {
    return next(new Error('No data provided.'));
  }
  let task = new Task();
  task.name = req.body.name;
  task.createTime = new Date();
  task.completed = false;
  task.save(function (error) {
    if (error) return next(error);
    //if (!task) return next(new Error('Failed to save.'));
    //console.info('Added %s with id=%s', task.name, task._id);
    res.redirect('/tasks');
  });
};

const markAllCompleted = function(req, res, next) {
  if (!req.body.all_done || req.body.all_done !== 'true') return next();
  req.db.tasks.update({
    completed: false
  }, {$set: {
    completeTime: new Date(),
    completed: true
  }}, {multi: true}, function(error, count){
    if (error) return next(error);
    console.info('Marked %s task(s) completed.', count);
    res.redirect('/tasks');
  })
};

const completed = function (req, res, next) {
  req.db.tasks.find({ completed: true }).toArray(function (error, tasks) {
    res.render('tasks_completed', {
      title: 'Completed',
      tasks: tasks || [],
    });
  });
};

const markCompleted = function(req, res, next) {
  if (!req.body.completed) return next(new Error('Param is missing.'));
  var completed = req.body.completed === 'true';
  req.db.tasks.updateById(req.task._id, {$set: {completeTime: completed ? new Date() : null, completed: completed}}, function(error, count) {
    if (error) return next(error);
    if (count !==1) return next(new Error('Something went wrong.'));
    console.info('Marked task %s with id=%s completed.', req.task.name, req.task._id);
    res.redirect('/tasks');
  })
};

const del = function(req, res, next) {
  req.db.tasks.removeById(req.task._id, function(error, count) {
    if (error) return next(error);
    if (count !==1) return next(new Error('Something went wrong.'));
    console.info('Deleted task %s with id=%s completed.', req.task.name, req.task._id);
    res.status(204).send();
  });
};

export default { list, add, markAllCompleted, completed, markCompleted, del };
