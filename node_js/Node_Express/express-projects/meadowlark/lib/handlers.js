import getFortune from './fortune';

const home = (req, res) => {
  res.render('home');
};

const about = (req, res) => {
  res.render('about', { fortune: getFortune() });
};

const notFound = (req, res) => {
  res.render('404');
};

const serverError = (err, req, res, next) => {
  console.log(err);
  res.render('500');
};

export default { home, about, notFound, serverError };
