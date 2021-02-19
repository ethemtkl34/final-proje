    const   mongoose                   = require("mongoose"),
            passportLocalMongoose      = require("passport-Local-Mongoose");

    const UserSchema = new mongoose.Schema({
        username: String,
        password: String

    });

    UserSchema.plugin(passportLocalMongoose);
    
    module.exports = mongoose.model("users", UserSchema);




