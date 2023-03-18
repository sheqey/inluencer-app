
const express = require("express")

const rout = express.Router();


const services = require("../render")

rout.get("/", services.indexrout);
rout.get("/add2", services.add2);
rout.post("/payment", services.pay);

rout.get("/book", services.bookm);
rout.get("/gigs", services.bookm2);
rout.get("/form", services.form);
rout.post("/process-route", services.package);

rout.get("/getall", services.getall);
rout.get("/influencer/:uid", services.influencer);
rout.get("/single", services.single);




const multer = require("multer");


rout.get("/login", services.login);
rout.post("/plogin", services.plogin);
rout.post("/pulogin", services.pulogin);

rout.get("/logout", services.logout);

rout.get("/privacy", services.privacy);

rout.get("/creat", services.create);
rout.post("/pcreat", services.pcreate);
rout.post("/pucreat", services.pucreate);

rout.post("/delete", services.deleteq);
rout.post("/update", services.update);











 
const path = require("path");
//const multer = require('multer');

// Define storage for the uploaded image files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/images'); // specify the directory to save the files
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // use the original file name as the new file name
  }
});

// Create the multer middleware
const upload = multer({ storage });

// Use the middleware to handle the file upload
rout.post("/save", upload.array('images', 5), services.save);

rout.post("/po", upload.array('images', 5), services.po);

rout.post("/pro", upload.single('image'), services.pro);




module.exports = rout;