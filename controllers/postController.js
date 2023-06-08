const Post = require('../models/postModel');
console.log("hello controller");
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