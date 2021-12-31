const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary');

const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

// Multer 설정
const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname);
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
router.get('/', isLoggedIn, (req, res) => {});

router.get('/post/:id/like', isLoggedIn, (req, res) => {});

router.get(
  '/post/:postid/comments/:commentid/like',
  isLoggedIn,
  (req, res) => {},
);

router.get('/post/new', isLoggedIn, (req, res) => {
  res.render('posts/new');
});

router.post('/post/new', isLoggedIn, upload.single('image'), (req, res) => {});

function createPost(newPost, req, res) {
  Post.create(newPost, (err, post) => {
    if (err) {
      console.log(err);
    } else {
      req.user.posts.push(post._id);
      req.user.save();
      res.redirect('/');
    }
  });
}

router.get('/post/:id', isLoggedIn, (req, res) => {});

router.post('/post/:id/comments/new', isLoggedIn, (req, res) => {});

module.exports = router;
