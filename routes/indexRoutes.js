const express = require("express"),
      Blog      = require("../models/blogModel"),
      router = express.Router(),
  app = express.Router();
  

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

module.exports = router;
