exports.getPosts = (req,res,next) => {
    res.status(200).json({ //send json
        posts: [{title: 'FirstBook', content: 'This is the first post'}]
    });
};

// For POST MAN
exports.createPost = (req,res,next) => {
    const title = req.body.title;
    const content = req.body.content;
    // Create Post in DB
    res.status(201).json({
        message: 'Post created successfully',
        post: {id: new Data().toISOString(), title: title, content:content}
    });
}
// For POST MAN