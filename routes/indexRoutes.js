const cookieParser = require("cookie-parser");
const { Router } = require("express");
const express   = require("express"),
      Blog      = require("../models/blogModel"),
      router    = express.Router(),
      app       = express.Router();

// Google Auth

      
  

 /* let data=[

    {
      postTitle: "ironman1",
      postSubtitle: "ironman",
      image: "https://wallpapercave.com/wp/wp3324196.jpg"
    },
    {
      postTitle: "ıronman2",
      postSubtitle: "ıronman2",
      image: "https://wallpapercave.com/wp/wp3324202.jpg"
    },
    {
      postTitle:"ııronman3",
      postSubtitle:"ıronman3",
      image:"https://wallpapercave.com/wp/wp3703397.jpg"
    }

  ]; */

router.get("/", (req, res) => {
  Blog.find({},(err, foundBlogs)=>{
    if (err) {
      console.log("------ERÖRR------");
        console.log(err);
      } else {
        console.log("ÇALİŞÜÜÜÜR AMAKOYM");
        console.log(foundBlogs);
  res.render("home",{foundBlogs:foundBlogs});
      }
  });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/resume", (req, res) => {
  res.render("resume");

});

app.get('/google',
  passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' });

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });













module.exports = router;
