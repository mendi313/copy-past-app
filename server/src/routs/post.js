const express = require('express');
const router = express.Router();
const {
  getPost,
  getPosts,
  addPost,
  updatePost,
  deletePost,
} = require('../controller/postController');

router.route('/').get(getPosts).post(addPost);
router.get('/:url', getPost);
router.put('/:url', updatePost);
router.delete('/:url', deletePost);

module.exports = router;
