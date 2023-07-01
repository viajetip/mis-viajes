const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        max: 50,
        unique: true
    },
    password: String,
    avatar: String,
    date: String
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);