const index = function (req, res) {
  res.render('index', { title: 'Home' });
};

export default { index };
