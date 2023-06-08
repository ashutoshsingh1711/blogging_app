const express = require('express');
const router = express.Router();

const {likePost} = require('../controllers/likeController');

router.post('/likes/like', likePost);

module.exports = router;
