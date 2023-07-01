const mongoose = require('mongoose');

const CheckInSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    lat: {
        type: String,
    },
    lng: {
        type: String,
    },
    country: {
        type: String,
        required: true,
    },
    city: String,
    date: String

}, {timestamps: true});

module.exports = mongoose.model('CheckIn', CheckInSchema);