const express = require('express');
const router = express.Router();

const {createPost, getPost} = require('../controllers/postController');
const {likePost} = require('../controllers/likeController')
const {createComment} = require('../controllers/commentController');
router.post('/posts/create', createPost);
router.get('/post',getPost);
router.post('/likes/like', likePost);
router.post('/comments/create', createComment);
module.exports = router;
