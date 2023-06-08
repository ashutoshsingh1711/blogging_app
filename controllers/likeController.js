const Like = require('../models/likeModel');
const Post = require('../models/postModel');

exports.likePost = async (req, res) => {
    try{
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();

        //Update the Post collection based on likes inside like array
        const updatedPost = await Post.findByIdAndUpdate(post, 
            {$push: {likes: savedLike._id}}, {new:true})
            .populate("likes")
            .exec();
        
        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            error:"Error while fetching likes"
        });
    }
}