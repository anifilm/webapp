/*
 * GET users listing.
 */

const list = function (req, res, next) {
  req.db.tasks.find({ completed: false }).toArray(function (error, tasks) {
    if (error) return next(error);
    res.render('tasks', {
      title: 'Todo List',
      tasks: tasks || [],
    });
  });
};

export default { list };
