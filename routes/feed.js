const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
// For Fetching also
router.get('/posts', feedController.getPosts);    // the function that should be executed for that Route

//Post /Feed/post
router.post('/post', feedController.createPost);

module.exports = router;

