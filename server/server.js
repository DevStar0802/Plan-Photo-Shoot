const express = require('express')
require('dotenv').config();
const bodyParser = require('body-parser');
const multer = require('multer');
const db = require('./config/connection')
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');
const routes = require('./routes');
const app = express()
const port = process.env.PORT || 3001

const upload = multer({ dest: 'uploads/' }); // Destination directory for temporary file storage

app.use(express.json()); // Middleware to parse JSON data

app.use(bodyParser.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded

// Middleware to handle file uploads with Multer
const uploadMiddleware = multer(); // No options needed for memory storage
app.use(uploadMiddleware.any()); // Handle any file uploads


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));


//initialize session with secret, cookie, and store location
const sess = {
    secret: 'User Login Session',
    cookie: {
        maxAge: 7200000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/photoDB' })
};

//Use express session middleware
app.use(session(sess));

app.use(routes);

app.use(upload)

db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server Live, running on port ${port}!`);
    });
});