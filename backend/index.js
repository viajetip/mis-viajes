const express = require('express');
const mongoose = require('mongoose');

const checkinRoute = require('./routes/checkins');
const userRoute = require('./routes/users');


const app = express();

mongoose.connect('mongodb+srv://eliptikman1234:1zxcvbnm@social-media.l6byluu.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    }
    ).then(console.log('🚀 MongoDB connected!'))
    .catch(err => console.log(err));

app.use(express.json());

app.use('/api/checkins', checkinRoute);
app.use('/api/users', userRoute);

app.listen(8800, () => {
    console.log('🚀 Backend server is running!');
    }
);