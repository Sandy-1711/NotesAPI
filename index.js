const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const noteRoute = require('./routes/note');



mongoose.connect(process.env.MONGO_URL).then(function () {
    console.log('connected to mongodb server');
}).catch(function (err) {
    console.log(err);
})

app.use(express.json());

app.use('/mynote', noteRoute);

app.listen(process.env.PORT || 5000, function () {
    console.log('server is running');
});