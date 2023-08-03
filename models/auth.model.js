// install required dependencies
const mongoose = require('mongoose');


// create a schema for register user
const authSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
});


// create a model and store to mongodb database as name `users`
const AuthModel = mongoose.model('user', authSchema);


// export it to use everywhere in our local file
module.exports = { AuthModel };