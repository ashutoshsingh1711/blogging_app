//Import model
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

//business logic

exports.createComment = async (req, res) => {
    try{
        //fetch data from request body
        const {post, user, body} = req.body;

        //create a new comment  
        const comment = new Comment({
            post,user,body
        });

        //save the new comment into the database
        const saveComment = await comment.save();

        //find the post by ID from Post collection and add the new comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(post, 
            {$push: {comments: saveComment._id}}, 
            {new: true})
            .populate("comments") //populate the comment array with comment document
            .exec(); //execute
        
        res.json({
            post: updatedPost,
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            error: "Error while creating comment",
        })
    }
}