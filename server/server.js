const express = require('express')
const db = require('./config/connection')
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');
const routes = require('./routes');
const app = express()
const port = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server Live, running on port ${port}!`);
    });
});