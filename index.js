const path = require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const app = express();
 
app.set('views',path.join(__dirname,'views'));

app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

 
app.use('/assets', express.static (__dirname + '/public'));

//index
app.get('/', (req, res) => {
  res.render('index_view');
});

//kontak
app.get('/contact', (req, res) => {
  res.render('contact_view');
});

//about
app.get('/about', (req, res) => {
  res.render('about_view');
});

 
//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});