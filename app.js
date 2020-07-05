const express = require('express');
const hbs = require('hbs');
const app = express();
require('dotenv').config(); // .env exposed

// ----- enable public files to be downloaded by the browser -----
app.use(express.static(__dirname + '/public'));

// -------- HBS config --------
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// -------- page HOME --------
app.get('/', (req, res) => {
   res.render('home', { pageTitle: 'Welcome' });
});

// -------- page ABOUT --------

app.get('/about', (req, res) => {
   res.render('about', { pageTitle: 'About Arya' });
});

// -------- page WORKS--------

app.get('/works', (req, res) => {
   res.render('works', { pageTitle: "Arya's achievements" });
});

// -------- page error --------

app.get('*', function (req, res) {
   res.send('not found, sorry');
});

// -------- starts local server --------
app.listen(process.env.PORT, () => {
   console.log(`server is running @ http://localhost:${process.env.PORT}`);
});
