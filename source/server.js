'use strict';
const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');

const infoGetter = require('./infoGetter');
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
  infoGetter.eng([req.body.dev1, req.body.dev2], res)
})

app.listen(80)
console.log('server successfully started ...');
