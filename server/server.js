const express = require('express')
const db = require('./config/connection')
const path = require('path');
// const routes = require('./routes');
const app = express()
const port = process.env.PORT || 3001
const { User } = require('./models/User')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
// app.use(routes);

// app.listen(port, () => {
//     console.log(`Server Live, app listening on port ${port}`)
// })

app.get('/api/user', async (req, res) => {
    try {
        const users = await User.find().populate('jobs');
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
})

db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server Live, running on port ${port}!`);
    });
});