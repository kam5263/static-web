const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dhwjs4248',
    port: '3307',
    database: ''
});

conn.connect();

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'jade');
app.set('views', './views_kim');
app.locals.pretty = true;

app.use(express.static('views_kim')); // 이미지 상위 폴더 지정

app.listen(3000, ()=>{
    console.log('Connected 3000 port');
});

app.get('/', (req, res)=>{
    res.render('view.jade');
});
app.get('/about', (req, res)=>{
    res.render('about.jade');
});
app.get('/w_all', (req, res)=>{
    res.render('w_all.jade');
});
app.get('/w_outer', (req,res)=>{
    res.render('w_outer.jade');
});
app.get('/w_top', (req,res)=>{
    res.render('w_top.jade');
});
app.get('/w_bottom', (req,res)=>{
    res.render('w_bottom.jade');
});
app.get('/w_outer/item01', (req,res)=>{
    res.render('item01.jade')
});
