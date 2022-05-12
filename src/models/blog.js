const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    snippet:{
        type:String,
        require:true
    },
    option:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    },
    snippet1:{
        type:String,
        require:true
    },
    body1:{
        type:String,
        require:true
    },
    snippet2:{
        type:String,
        require:true
    },
    body2:{
        type:String,
        require:true
    },
    Keywords:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    image1:{
        type:String,
        require:true
    }
    
},{timestamps:true});
const Blog = mongoose.model('Blog',blogSchema);
module.exports= Blog;