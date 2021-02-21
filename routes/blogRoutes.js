const express   = require("express"),
      Blog      = require("../models/blogModel"),
      router    = express.Router();
      



    router.get("/addNewBlog", isLoggedIn, (req, res) => {
        res.render("blog/newBlog");
    });
router.post("/addNewBlog",isLoggedIn, (req, res) => {
    let title = req.body.data.blogTitle;
    let comSentence = req.body.data.comSentence;
    let comImage = req.body.data.comImage;
    let blog = req.body.data.blog;

    let newBlog = 
    { 
        title       :title, 
        comSentence :comSentence, 
        comImage    :comImage, 
        blog        :blog 
    };

    Blog.create(newBlog)
    .then((newBlog)=>{
        console.log(newBlog);
        res.status(201).json(newBlog);
    })
    .catch((err=>{
        console.log("------ERÖRR------");
        console.log(err);
        res.send(err);

    }))

});

router.get("/blog/:blogId", (req,res)=>{
    Blog.findById(req.params.blogId)
    .then((foundBlogs)=>{
        res.render("blog/showBlog", {foundBlogs:foundBlogs});
    })
    .catch((err)=>{
        console.log("------ERÖRR------");
        console.log(err);
        res.send(err);

    })
});

router.get("/testing", (req,res)=>{
    Blog.find()
    .then((foundBlogs) => {
        res.json(foundBlogs);
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    }) //burda noktalı virgül vardı
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }



module.exports = router;