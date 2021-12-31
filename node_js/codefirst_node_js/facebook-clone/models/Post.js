const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  content: String,
  time: Date,
  likes: Number,
  image: String,
  creator: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    firstName: String,
    lastName: String,
    profile: String,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
