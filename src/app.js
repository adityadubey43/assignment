const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();
const port = process.env.PORT || 3000;
const dbURI = 'mongodb+srv://Aditya:Aditya@cluster0.atrko.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then((result)=> console.log("connected"),app.listen(port))
.catch((err)=>console.log(err));

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.render('index',{title:'Blogs', keywords:'blogs, Health blogs, HealthlineBlogs', blogs:result})
    })
    .catch((err)=>{
        console.log(err);
    });
});
app.get('/:title/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then(async(result)=>{
        var allblogs=await Blog.find();
        res.render('Details',{blog:result,blogs:allblogs});
    })
    .catch((err)=>{
        console.log(err);
    });
})

app.post('/add-blog',(req,res)=>{
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.redirect('/')
    })
    .catch((err)=>{
        console.log(err);
    });
});

app.get('/a-blogs',(req,res)=>{   
    res.render('blog_form',{title:'Blogs', keywords:'blogs, Health blogs, HealthlineBlogs'})  
});

app.get('/diet',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.render('categories',{title:'Diet', keywords:'blogs, Health blogs, HealthlineBlogs', blogs:result})
    })
    .catch((err)=>{
        console.log(err);
    });
});
app.get('/fitness',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.render('categories',{title:'Fitness', keywords:'blogs, Health blogs, HealthlineBlogs', blogs:result})
    })
    .catch((err)=>{
        console.log(err);
    });
});
app.get('/yoga',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.render('categories',{title:'Yoga', keywords:'blogs, Health blogs, HealthlineBlogs', blogs:result})
    })
    .catch((err)=>{
        console.log(err);
    });
});
app.get('/womenwellness',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.render('categories',{title:'Womenwellness', keywords:'blogs, Health blogs, HealthlineBlogs', blogs:result})
    })
    .catch((err)=>{
        console.log(err);
    });
});
app.get('/parenthood',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.render('categories',{title:'Parenthood', keywords:'blogs, Health blogs, HealthlineBlogs', blogs:result})
    })
    .catch((err)=>{
        console.log(err);
    });
});
app.get('/mentalhealth',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.render('categories',{title:'Mentalhealth', keywords:'blogs, Health blogs, HealthlineBlogs', blogs:result})
    })
    .catch((err)=>{
        console.log(err);
    });
});
app.get('/:a/:title/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then(async(result)=>{
        var allblogs=await Blog.find();
        res.render('Details',{blog:result,blogs:allblogs});
    })
    .catch((err)=>{
        console.log(err);
    });
});
app.get('/about',(req,res)=>{
    res.render('about');
})


app.use((req,res)=>{
    Blog.find()
    .then((result)=>{
        res.render('404', {title:'404', keywords:'blogs, Health blogs, HealthlineBlogs', blogs:result});
    })
    .catch((err)=>{
        console.log(err);
    });
    
})