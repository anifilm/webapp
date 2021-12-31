const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: String,
  likes: Number,
  creator: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    firstName: String,
    lastName: String,
  },
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
