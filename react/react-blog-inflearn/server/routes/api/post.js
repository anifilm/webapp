import express from 'express';

// Model
import Post from '../../models/post';
import User from '../../models/user';
import Category from '../../models/category';
import Comment from '../../models/comment';

import '@babel/polyfill';
import auth from '../../middleware/auth';
import moment from 'moment';

const router = express.Router();

// api/post
router.get('/', async (req, res) => {
  const postFindResult = await Post.find();
  console.log(postFindResult, 'All Post Get');
  res.json(postFindResult);
});

router.post('/', async (req, res, next) => {
  try {
    console.log(req, 'req');
    const { title, contents, fileUrl, creator } = req.body;
    const newPost = await Post.create({
      title,
      contents,
      fileUrl,
      creator,
    });
    res.json(newPost);
  } catch (e) {
    console.log(e);
  }
});

export default router;
