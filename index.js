    const MongoClient   = require("mongodb");
    const mongoose      = require("mongoose"),
    express             = require("express"),
    passport            = require("passport"),
    LocalStrategy       = require("passport-local");
    bodyParser          = require("body-parser"),
    expressSession      = require("express-session"),
    User                = require("./models/userModel"),
    app                 = express();
    path                = require("path");
    const {OAuth2Client} = require('google-auth-library');
//routers burda tanımla app use da kullan
    const   indexRoutes = require("./routes/indexRoutes"),
            adminRoutes = require("./routes/adminRoutes"),
            blogRoutes  = require("./routes/blogRoutes");
// bunlar ne



//app.config
mongoose.connect("mongodb://localhost/BlogApp", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//passport config
app.use(require("express-session")({

    secret: "bu bizim güvenlik cümlemiz",
    resave: false,
    saveUninitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// share current user info within all routes kullanıcı adını paylaştığımız yer, bir responsa sürekli bütün lokallere currentuserları gönderecek ama bu requestteki user olacak
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});


//routes using
app.use(indexRoutes);
app.use(adminRoutes);
app.use(blogRoutes);

const server = app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("app started. Port number : %d ", server.address().port);
});