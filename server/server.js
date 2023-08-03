const express = require('express')
const cors = require('cors');
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

// This allows all origins
app.use(cors())
// Middleware to parse JSON data
app.use(express.json());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware to handle file uploads with Multer
const uploadMiddleware = multer();
// Handle any file uploads
app.use(uploadMiddleware.any());
// serve static file from public directory
app.use(express.static(path.join(__dirname, 'public')));
// Serve the static files from the client's build directory
app.use(express.static(path.join(__dirname, '../client/build')));


//initialize session with secret, cookie, and store location
const sess = {
    secret: 'User Login Session Secret',
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

//test code for server deployed
app.get('/', (req, res) => { res.send('Server Live!') })

//Use express session middleware
app.use(session(sess));

//Utilize express routes
app.use(routes);

db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server Live, running on port ${port}!`);
    });
});