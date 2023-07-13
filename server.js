const express = require('express')
const path = require('path');
const routes = require('./controllers');
const app = express()
const port = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(routes);

app.listen(port, () => {
    console.log(`Server Live, app listening on port ${port}`)
})