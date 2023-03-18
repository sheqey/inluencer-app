require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const cors = require('cors');


const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 400;
const connectdb = require("./database/connection")
const bodyparser =require("body-parser");
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/fonts'));
app.use('/static', express.static(__dirname + '/static'));
app.use('/d5ik1gor6xydq.cloudfront.net', express.static(__dirname + '../d5ik1gor6xydq.cloudfront.net'));
//app.use(express.json())
app.use(session({
    secret: '99999999999980',
    resave: false,
    saveUninitialized: true
  }));
  
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : true}));
app
app.set('view engine', 'ejs');    
app.set('/views', __dirname + '/views');
// app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.set("/views",path.resolve(__dirname,"/views"))


app.use(cors({
  origin: '*'
}));



connectdb();
app.use('/',require('./server/routes/routes'))





app.listen(PORT , ()=>{

console.log(`server is    listening at http://localhost:${PORT}`);
});