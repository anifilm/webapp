const express = require('express');
const passport = require('passport');
const multer = require('multer');
const cloudinary = require('cloudinary');

const router = express.Router();
const User = require('../models/User');

// Multer 설정
const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    callback(null, Data.now() + file.originalname);
  },
});

const imageFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter });

// Cloudinary 설정
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 미들웨어 설정
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error', 'You need to be logged in to do that!');
  res.redirect('/user/login');
};

// 라우터 설정
// User Routers
router.post('/user/register', upload.single('image'), (req, res) => {
  if (
    req.body.username &&
    req.body.firstname &&
    req.body.lastname &&
    req.body.password
  ) {
    let newUser = new User({
      username: req.body.username,
      firstName: req.body.firstname,
      lastName: req.body.lastname,
    });

    if (req.file) {
      cloudinary.uploader.upload(req.file.path, (result) => {
        newUser.profile = result.secure_url;
        return createUser(newUser, req.body.password, req, res);
      });
    } else {
      newUser.profile = process.env.DEFAULT_PROFILE_PIC;
      return createUser(newUser, req.body.password, req, res);
    }
  }
});

function createUser(newUser, password, req, res) {
  User.register(newUser, password, (err, user) => {
    if (err) {
      req.flash('error', err.message);
      res.redirect('/');
    } else {
      passport.authenticate('local')(req, res, function () {
        console.log(req.user);
        req.flash('success', 'Success! You are registered and logged in!');
        res.redirect('/');
      });
    }
  });
}

// Login
router.get('/user/login', (req, res) => {
  res.render('users/login');
});

router.post(
  '/user/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/user/login',
  }),
  (req, res) => {},
);

// All users
router.get('/user/all', isLoggedIn, (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log(err);
      req.flash('error', 'There has been a problem getting all users info.');
      res.redirect('/');
    } else {
      res.render('users/users', { users: users });
    }
  });
});

// Logout
router.get('/user/logout', (req, res) => {
  req.logout();
  res.redirect('back');
});

// User Profile
router.get('/user/:id/profile', isLoggedIn, (req, res) => {
  User.findById(req.params.id)
    .populate('friends')
    .populate('friendRequests')
    .populate('posts')
    .exec((err, user) => {
      if (err) {
        console.log(err);
        req.flash('error', 'There has been an error.');
        res.redirect('back');
      } else {
        console.log(user);
        res.render('users/user', { userData: user });
      }
    });
});

// Add Friend
router.get("/user/:id/add", isLoggedIn, (req, res) => { });

// Accept friend request
router.get("/user/:id/accept", isLoggedIn, (req, res) => { });

// Decline friend Request
router.get("/user/:id/decline", isLoggedIn, (req, res) => { });

// Chat Routers
router.get('/chat', isLoggedIn, (req, res) => {
  User.findById(req.user._id)
    .populate('friends')
    .exec((err, user) => {
      if (err) {
        console.log(err);
        req.flash('error', 'There has been an error trying to access the chat');
        res.redirect('/');
      } else {
        res.render('users/chat', { userData: user });
      }
    });
});

module.exports = router;
