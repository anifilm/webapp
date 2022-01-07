exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.respondWithName = (req, res) => {
  console.log(req.body);
  console.log(req.query);
  let paramsName = req.query.myName ?? 'World';
  res.render('index', { name: paramsName });
};
