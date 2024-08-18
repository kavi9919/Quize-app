const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

app.use('/user', signupRoutes);
app.use('/auth', loginRoutes);

mongoose.connect('mongodb+srv://admin:8RfnHs4xwQd2TSUr@cluster0.ngkxs.mongodb.net/')
.then(() => {
    console.log('Connected to database');
})
.then(() => {
    //http://localhost:5000/
    app.listen(PORT, () => {
        console.log(`Server is running on : http://localhost:${PORT}`);
    });
})
.catch((e) => {
    console.log("Error: ");
});