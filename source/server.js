'use strict';
const express = require('express')
const url = require('url');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs')
app.use(express.json())
app.set('views', path.join(__dirname, '/assets/views'))
app.use('/styles', express.static('./assets/styles'))
app.use('/scripts', express.static('./assets/scripts'))
app.use('/images', express.static('./assets/images'))
app.use('/fonts', express.static('./assets/fonts'))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/getDevData', (req, res) => {
  console.log(req.body.dev1);
})

app.listen(80)
console.log('server successfully started ...');
