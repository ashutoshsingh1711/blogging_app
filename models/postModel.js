const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        required:true,
    }
});

const Post = new mongoose.model('Post', postSchema);
module.exports = Post;