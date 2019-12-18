const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },

  tags: {
    type: String,
    required: true
  }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;