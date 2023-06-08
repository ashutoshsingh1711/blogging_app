const Post = require('../models/postModel');
exports.createPost = async (req, res) => {
    try{
        const {title, body} = req.body;
        console.log(req.body);
        const post = new Post({
            title, body
        });
        const savedPost = await post.save();

        res.json({
            post:savedPost,
        })
    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            error:"Error while creating post"
        });
    }
}
exports.getPost = async (req, res) => {
    try{
        const post = await Post.find().populate("likes").populate("comments").exec();

        res.json({
            post
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            error:'Error while fetching posts'
        });
    }
}